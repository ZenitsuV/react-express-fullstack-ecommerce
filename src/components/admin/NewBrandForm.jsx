import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getCurrentDate} from '../common/Utilities';

const NewBrandForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
       brandName: '',
       webSite: '',
       logo:'',
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
    
    if (!formData.brandName.trim()) {
      newErrors.brandName = 'Category name is required';
    }

    if (!formData.webSite.trim()) {
        newErrors.webSite = 'Icon name is required';
    }

     if (!formData.description.trim()) {
       newErrors.description = 'Description is required';
     } 
 
    //  if (!formData.logo) {
    //     newErrors.logo = 'Logo is required';
    // }

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
            name: formData.brandName,
            website: formData.webSite,    
            logo: formData.logo,  
            isActive: formData.active,
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
     navigate('/NewBrand');
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
                <label for="brandName">Brand Name*</label>
                <div>
                    <input
                            placeholder="Brand Name"
                            required=""
                            className={errors.brandName ? 'form-control error' : 'form-control'}
                            type="text"
                            value={formData.brandName}
                            id="brandName"
                            name="brandName"
                            onChange={handleChange}
                        />
                {errors.brandName && <span className="error-message">{errors.brandName}</span>}
                </div>
            </span>


            <span className="register-wrap register-half">
                <label for="webSite">Web Site*</label>
                <div>
                    <input
                            placeholder="Web Site"
                            required=""
                            className={errors.webSite ? 'form-control error' : 'form-control'}
                            type="text"
                            value={formData.webSite}
                            id="webSite"
                            name="webSite"
                            onChange={handleChange}
                        />
                {errors.webSite && <span className="error-message">{errors.webSite}</span>}
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
                <label>Logo</label>
                <div>
                    <label class="file">
                        <input type="file" id="file" name="logo" aria-label="File browser example" 
                          onChange={handleImageUpload}
                        />
                       
                    </label>
                    {errors.logo && <span className="error-message">{errors.logo}</span>}
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

export default NewBrandForm;