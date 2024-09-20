/*import fs from "fs";
import foodModel from "../models/foodModel.js";

// add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({
            success: true, message: "Food added successfully!"
        }
        )
    } catch (error) {
        console.log(error);
        res.json({
            success: false, message: "Food not added!"
        })
    }

}

// all food items list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({
            success: true, data: foods
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false, message: "Food not found!"

        })
    }
}

//remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true, message: "Food deleted successfully!"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false, message: "Food not deleted!"
        })
    }
}


export { addFood, listFood, removeFood };
*/

import cloudinary from "cloudinary";
import foodModel from "../models/foodModel.js";

// add food item
const addFood = async (req, res) => {
    //let image_url = req.file.path;
    const{name,description,price,category, image}=req.body
    console.log(name, description, price, category, image);
    const food = new foodModel({
        name: name,
        description: description,
        price:price,
        category: category,
        image:image

    });

    try {
        await food.save();
        res.json({
            success: true, message: "Food added successfully!"
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false, message: "Food not added!"
        });
    }
};

// all food items list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({
            success: true, data: foods
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false, message: "Food not found!"
        });
    }
};

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        // Remove image from Cloudinary
        const imageId = food.image.split('/').pop().split('.')[0];

        await cloudinary.v2.uploader.destroy(imageId);

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true, message: "Food deleted successfully!"
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false, message: "Food not deleted!"
        });
    }
};

export { addFood, listFood, removeFood };

