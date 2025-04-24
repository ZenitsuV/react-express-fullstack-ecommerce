import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getCurrentDate} from '../common/Utilities';

const NewCategoryForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
       categoryName: '',
       iconName: '',
       color:'',
       description:'',
       active:'',
    })
    const [errors, setErrors] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

  

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

    };


    const handleImageUpload = (e) => {
        setSelectedImage(e.target.files[0].name);
    }

 

  const validateForm = () => {
    const newErrors= {};
    
    if (!formData.categoryName.trim()) {
      newErrors.categoryName = 'Category name is required';
    }

    if (!formData.iconName.trim()) {
        newErrors.iconName = 'Icon name is required';
    }

     if (!formData.description.trim()) {
       newErrors.description = 'Description is required';
     } 
 
     if (!formData.color) {
        newErrors.color = 'Color is required';
    }

    if (!formData.active) {
        newErrors.active = 'Active is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
   let createdAt =  getCurrentDate();
    try {
       const formObj = {
            name: formData.categoryName,
            icon: formData.iconName,    
            bgcolor: formData.color, 
            totalCount: 0,   
            description: formData.description,     
            subCategory: [],  
            image:"",   
            isActive: formData.active,
            featured:true,
            createdAt: createdAt,
            updatedAt: createdAt,
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
     navigate('/NewCategory');
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
                <label for="categoryName">Category Name*</label>
                <div>
                    <input
                            placeholder="Category Name"
                            required=""
                            className={errors.categoryName ? 'form-control error' : 'form-control'}
                            type="text"
                            value={formData.categoryName}
                            id="categoryName"
                            name="categoryName"
                            onChange={handleChange}
                        />
                {errors.categoryName && <span className="error-message">{errors.categoryName}</span>}
                </div>
            </span>


            <span className="register-wrap register-half">
                <label for="iconName">Icon Name*</label>
                <div>
                    <input
                            placeholder="Icon Name"
                            required=""
                            className={errors.iconName ? 'form-control error' : 'form-control'}
                            type="text"
                            value={formData.iconName}
                            id="iconName"
                            name="iconName"
                            onChange={handleChange}
                        />
                {errors.iconName && <span className="error-message">{errors.iconName}</span>}
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

            
            <span className="register-wrap register-half">
                <label>Color</label>
                <div>
                    <input
                            placeholder="Color"
                            required=""
                            className={errors.color ? 'form-control error' : 'form-control'}
                            type="color"
                            value={formData.color}
                            name="color"
                            id="color"
                            onChange={handleChange}
                        />
                        {errors.color && <span className="error-message">{errors.color}</span>}
                </div>
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
                        <option value="true">Yes</option>      
                        <option value="false">No</option>      
                    </select>               
                </div>
                {errors.active && <span className="error-message">{errors.active}</span>}
            </span>
            
            <span className="register-wrap register-btn" style={{marginTop: "10px", justifyContent:'end'}}>            
                <button className="btn-1" type="submit" >Add</button></span>
        </form>   

    </div>
  );
};

export default NewCategoryForm;