import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getCurrentDate} from '../common/Utilities';

const NewProductForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
       productName: '',
       title: '',
       price:'',
       discountPrice:'',
       description:'',
       stock:'',
       image:'',
       brand:'',
       category:'',
       subCategory:'',
       active:'',
       tags:''
    })
    const [errors, setErrors] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
      const fetchCategories = async () => {
          try {
              let response = await fetch('category.json');
              let data = await response.json();
              setCategories(data);
           } catch(error) {
             console.log(error);
           }
      }

      const fetchBrands = async () => {
        try {
            let response = await fetch('brands.json');
            let data = await response.json();
            setBrands(data);
         } catch(error) {
           console.log(error);
         }
    }
    fetchCategories();
    fetchBrands();

    },[])
  

    const handleChange = (e) => {
       const {name, value, type} = e.target;
        setFormData({
           ...formData,
           [name]:value
       });

     // Clear error when user starts typing
     if (errors[name]) {
        setErrors({
          ...errors,
          [name]: '',
          form: ''
        });
      }
      
      
        let filteredCategory = categories.filter((category) => category.id === value)[0];
        setSubCategories(filteredCategory.subCategory);
      

    };


    const handleImageUpload = (e) => {
        setSelectedImage(e.target.files[0].name);
    }

 

  const validateForm = () => {
    const newErrors= {};
    
    if (!formData.productName.trim()) {
      newErrors.productName = 'First name is required';
    }

    if (!formData.title.trim()) {
        newErrors.title = 'Last name is required';
    }
    
    if (!formData.price) {
      newErrors.price = 'Price is required';
     } else if (!/^\d+$/.test(formData.price)) {
      newErrors.price = 'Price is invalid';
     }

    if (!formData.discountPrice) {
        newErrors.discountPrice = 'Discount Price is required';
     } else if (!/^\d+$/.test(formData.discountPrice)) {
        newErrors.discountPrice = 'Discount Price is invalid';
     }

     if (!formData.description.trim()) {
       newErrors.description = 'Description is required';
     } 
    
     if (!formData.stock) {
        newErrors.stock = 'Stock is required';
     } else if (!/^\d+$/.test(formData.stock)) {
        newErrors.stock = 'Stock is invalid';
     }
   
     if (!selectedImage) {
        newErrors.image = 'Image is required';
    }

    if (!formData.brand) {
        newErrors.brand = 'Brand is required';
    }

    if (!formData.category) {
        newErrors.category = 'Category is required';
    }

    if (!formData.subCategory) {
        newErrors.subCategory = 'Sub Category is required';
    }


    if (!formData.active) {
        newErrors.active = 'Active is required';
    }

    if (!formData.tags) {
        newErrors.tags = 'Tags is required';
    }
 

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
   let percentValue = (formData.discountPrice / formData.price) * 100;
   let discountPercentage = (percentValue - 100).toFixed(2);
   let createdAt =  getCurrentDate();
    try {
       const formObj = {
            productName: formData.productName,
            title: formData.title,
            price: Number(formData.price),
            discountPrice: Number(formData.discountPrice),
            discountPercentage: Number(discountPercentage),
            description: formData.description,
            stock: Number(formData.stock),
            images: selectedImage,
            brand: formData.brand,
            category: formData.category,
            subCategory: formData.subCategory,
            active: formData.active,
            tags: formData.tags,
            createdAt: createdAt,
            updatedAt: createdAt,
            rating: 0,
            numReviews: 0,
            isFeatured:false,
            variations: [],
      };
      
     console.log(formObj);

      // Send data to your backend API
      /* const response = await fetch('/api/add-product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formObj),
        });
        
        if (!response.ok) {
          throw new Error('Registration failed');
        }  */
      
      // Registration successful - redirect or show success message
     navigate('/NewProduct');
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({
        ...errors,
        form: 'Registration failed. Please try again.'
      });
    }
  };

  return (
    <div className="registration-container">
      {errors.form && <div className="error-message">{errors.form}</div>}
      
      <form onSubmit={handleSubmit}>
        <span className="register-wrap register-half">
            <label for="productName">Product Name*</label>
            <div>
                <input
                        placeholder="Product Name"
                        required=""
                        className={errors.productName ? 'form-control error' : 'form-control'}
                        type="text"
                        value={formData.productName}
                        id="productName"
                        name="productName"
                        onChange={handleChange}
                    />
            {errors.productName && <span className="error-message">{errors.productName}</span>}
            </div>
            </span>
            
            <span className="register-wrap register-half">
                <label>Title*</label>
                <div>
                    <input
                            placeholder="Title"
                            required=""
                            className={errors.title ? 'form-control error' : 'form-control'}
                            type="text"
                            value={formData.title}
                            name="title"
                            id="title"
                            onChange={handleChange}
                        />
                        {errors.title && <span className="error-message">{errors.title}</span>}
                </div>
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Price*</label>
                <div>
                    <input
                        placeholder="Price"
                        required=""
                        className={errors.price ? 'form-control error' : 'form-control'}
                        type="number"
                        min='1'
                        value={formData.price}
                        name="price"
                        onChange={handleChange}
                        />
                    {errors.price && <span className="error-message">{errors.price}</span>}
                </div>
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Discount Price*</label>
                <div>
                    <input
                        placeholder="Discount Price"
                        required=""
                        className={errors.discountPrice ? 'form-control error' : 'form-control'}
                        type="number"
                        min='1'
                        value={formData.discountPrice}
                        name="discountPrice"
                        onChange={handleChange}
                        />
                        {errors.discountPrice && <span className="error-message">{errors.discountPrice}</span>}
                </div>
            </span>

            <span className="register-wrap" style={{marginTop: "10px"}}>
                <label>Description</label>
                <div>
                    <input
                        placeholder="Description"
                        required=""
                        className={errors.description ? 'form-control error' : 'form-control'}
                        type="text"
                        value={formData.description}
                        name="description"
                        style={{width:"97%"}}
                        onChange={handleChange}
                        />
                    {errors.description && <span className="error-message">{errors.description}</span>}
                </div>
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Stock*</label>
                <div>
                    <input
                        placeholder="Stock"
                        required=""
                        autoComplete="off"
                        className={errors.stock ? 'form-control error' : 'form-control'}
                        type="number"
                        min='1'
                        step='1'
                        value={formData.stock}
                        name="stock"
                        onChange={handleChange}
                        />
                        {errors.stock && <span className="error-message">{errors.stock}</span>}
                </div>
            </span>
            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Image*</label>
                <div>
                    <label class="file">
                        <input type="file" id="file" name="image" aria-label="File browser example" 
                          onChange={handleImageUpload}
                        />
                       
                    </label>
                    {errors.image && <span className="error-message">{errors.image}</span>}
                </div>
            </span>    

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Brand</label>
                <div className="rg-select-inner  ">
                    <select
                        name="brand"
                        required=""               
                        className={errors.brand ? 'register-select form-select form-select-sm error' : 'register-select form-select form-select-sm'}
                        id="select-brand"
                        onChange={handleChange}
                        >
                        <option value="" disabled>--Select Brand--</option>
                        {brands.map((brand) =>(
                          <option value={brand.id} key={brand.id}>{brand.name}</option>     
                        ))}  
                    </select>    
                </div>
                {errors.brand && <span className="error-message">{errors.brand}</span>}
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Category</label>
                <div className="rg-select-inner  ">
                    <select
                        name="category"
                        required=""
                        className={errors.category ? 'register-select form-select form-select-sm error' : 'register-select form-select form-select-sm'}
                        id="select-category"
                        onChange={handleChange}
                        >
                        <option value="">--Select Category--</option>
                        {categories.map((category) =>(
                          <option value={category.id} key={category.id}>{category.name}</option>     
                        ))}
                         
                    </select>           
                </div>       
                {errors.category && <span className="error-message">{errors.category}</span>}   
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Sub Category</label>
                <div className="rg-select-inner  ">
                    <select
                        name="subCategory"
                        required=""
                        className={errors.category ? 'register-select form-select form-select-sm error' : 'register-select form-select form-select-sm'}
                        id="select-subCategory"
                        onChange={handleChange}
                        >
                        <option value="" disabled>--Select Sub Category--</option>
                        {subCategories.map((subCategory) =>(
                          <option value={subCategory} key={subCategory}>{subCategory}</option>     
                        ))}  
                    </select>           
                </div>       
                {errors.subCategory && <span className="error-message">{errors.subCategory}</span>}   
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Active</label>
                <div className="rg-select-inner">
                    <select
                        name="active"
                        required=""
                        className={errors.active ? 'register-select form-select form-select-sm error' : 'register-select form-select form-select-sm'}
                        id="select-active"
                        onChange={handleChange}
                    >
                        <option value="" disabled>--Select Active--</option>
                        <option value="true" key="true">Yes</option>      
                        <option value="false" key="false">No</option>      
                    </select>               
                </div>
                {errors.active && <span className="error-message">{errors.active}</span>}
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Tags</label>
                <div className="rg-select-inner">
                    <select
                        name="tags"
                        required=""
                        className={errors.tags ? 'register-select form-select form-select-sm error' : 'register-select form-select form-select-sm'}
                        id="select-tags"
                        onChange={handleChange}
                    >
                        <option value="" disabled>--Select Tags--</option>   
                        <option value="New" key="New">New</option>      
                        <option value="Sale" key="Sale">Sale</option>      
                    </select>               
                </div>
                {errors.tags && <span className="error-message">{errors.tags}</span>}
            </span>
            
            <span className="register-wrap register-btn" style={{marginTop: "10px", justifyContent:'end'}}>            
                <button className="btn-1" type="submit" >Add</button></span>
        </form>   

    </div>
  );
};

export default NewProductForm;