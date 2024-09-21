/*import axios from "axios";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import './Add.css';
const Add = ({url}) => {
    
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad",
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,formData);
        if (response.data.success){
            setData({
             name:"",
             description:"",
             price:"",
             category:"Salad",
            }) 
            setImage(false)
            toast.success(response.data.message)
         }
         else{
          toast.error(response.data.message);
         }
    }
  return (
    <div className='add'>
      <form className='flex-col'onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
        <p>Upload Image</p>
        <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />  
        </div>
        <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here '/>
        </div>
        <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product Category</p>
                <select onChange={onChangeHandler} name="category">
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='৳50'/>
            </div>
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add
*/

/*import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "./Add.css";
const UploadState = {
  IDLE: 1,
  UPLOADING: 2,
  UPLOADED: 3,
};

Object.freeze(UploadState);
const Add = ({ url }) => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileinputRef = useRef();
  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    } else {
      setPreview(null);
    }
  }, [image]);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  async function handleFormData() {
    //setUploadState(UploadState.UPLOADING);
    // const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await axios.post(`${url}/upload-cloud`, formData);
      // const response = await axios.post(`${url}/api/food/add`, formData);
      console.log(res.data);
      const data = await res.data;
      console.log(data);
      //setImgUrl(data.secure_url);
      //setUploadState(UploadState.UPLOADED);
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading file:", error);
      //setUploadState(UploadState.IDLE); // reset to IDLE state in case of an error
    }
  }
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const secureUrl = await handleFormData();
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", Number(data.price));
      formData.append("category", data.category);
      formData.append("image", secureUrl);
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        // setData({
        //   name: "",
        //   description: "",
        //   price: "",
        //   category: "Salad",
        // });
        //setImage(false)
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          {/* <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
        </label> 
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />  
        */
       
    /*}
          {preview ? (
            <img
              src={preview}
              style={{ objectFit: "cover" }}
              onClick={() => {
                setImage(null);
              }}
            />
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                fileinputRef.current.click();
              }}
            >
              add image
            </button>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileinputRef}
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setImage(e.target.files[0]);
                //setPreview(URL.createObjectURL(e.target.files[0]));
              } else {
                setImage(null);
              }
            }}
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here "
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="৳50"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
*/


import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "./Add.css";

const UploadState = {
  IDLE: 1,
  UPLOADING: 2,
  UPLOADED: 3,
};

Object.freeze(UploadState);

const Add = ({ url }) => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileinputRef = useRef();

  // Preview the image when it changes
  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    } else {
      setPreview(null);
    }
  }, [image]);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  // Handle form data for image upload
  async function handleFormData() {
    const formData = new FormData();
    formData.append("file", image);

    try {
        const res = await axios.post('http://localhost:4000/upload-cloud', formData);
        
        if (res.data && res.data.secure_url) {
            console.log("Uploaded image URL:", res.data.secure_url);  // Check if the URL is returned correctly
            return res.data.secure_url;
        } else {
            throw new Error("No secure URL in response");
        }
    } catch (error) {
        console.error("Error uploading file:", error);
        toast.error("File upload failed. Please try again.");
    }
}


  // Handle input field changes
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // Handle form submission
  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const secureUrl = await handleFormData();  // Get the Cloudinary image URL
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", Number(data.price));
      formData.append("category", data.category);
      formData.append("image", secureUrl);  // Attach the image URL

      const response = await axios.post(`${url}/api/food/add`, {
        name: data.name,
        description: data.description,
        price: Number(data.price),
        category: data.category,
        image: secureUrl,
      });

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          {preview ? (
            <img
              src={preview}
              style={{ objectFit: "cover" }}
              alt="preview"
              onClick={() => {
                setImage(null);
              }}
            />
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                fileinputRef.current.click();
              }}
            >
              Add image
            </button>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileinputRef}
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="৳50"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
