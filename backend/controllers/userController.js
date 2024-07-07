import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        //checking if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({
                success: false,
                message: "User Not Found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({
                success: false, message: "Invalid Credentials"
            });
        }

        const token = createToken(user._id);
        return res.json({
            success: true, token
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Internal Server Error"
        });
    }

}
    //register user
    const registerUser = async (req, res) => {
        console.log("Register User endpoint hit");
        console.log("Request body:", req.body);
        const { name, password, email } = req.body;
        try {
            //checking is user already exists
            const exists = await userModel.findOne({ email });
            if (exists) {
                return res.json({
                    success: false,
                    message: "User Already Exists"
                });
            }

            //validating email format & strong password
            if (!validator.isEmail(email)) {
                return res.json({
                    success: false,
                    message: "Please Enter a Valid Email"
                });
            }

            if (password.length < 8) {
                return res.json({
                    success: false,
                    message: "Please Enter a Strong Password containing at least 8 characters"
                });
            }

            //hashing user password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new userModel({
                name: name,
                email: email,
                password: hashedPassword
            });
            const user = await newUser.save();
            const token = createToken(user._id);
            res.json({
                success: true,
                token
            });

        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                message: "Internal Server Error"
            });

        }
    };

    export { loginUser, registerUser };

