import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../models/userModel.js";

//login user
const loginUser = async (req, res) => {
    const {email,password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if(!user) {
            return res.json({success: false, message: "User not found!"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.json({success: false, message: "Incorrect password!"});
        }
        const token = createToken(user._id);
        res.json({success: true,token});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong!"});       
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn: "6d"});
}

const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const exists = await userModel.findOne({ email });
        if(exists) {
            return res.json({success: false, message: "User already exists!"});
        }

        if(!validator.isEmail(email)) {
            return res.json({success: false, message: "Invalid email!"});
        }

        if (password.length < 6) {
            return res.json({success: false, message: "Password must be at least 6 characters!"}    
            )
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success: true,token});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong!"}
        )
        
    }
}

export { loginUser, registerUser };

