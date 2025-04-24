import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getCurrentDate} from '../common/Utilities';

const NewSubCategoryForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        category:'',
        subCategoryName: '',
    })
    const [errors, setErrors] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

    const [categories, setCategories] = useState([]);

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
      fetchCategories();
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

    };


    const handleImageUpload = (e) => {
        setSelectedImage(e.target.files[0].name);
    }

 

  const validateForm = () => {
    const newErrors= {};
    
    if (!formData.category) {
        newErrors.category = 'Category is required';
    }

    if (!formData.subCategoryName.trim()) {
      newErrors.subCategoryName = 'Sub Category name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
   let updatedAt =  getCurrentDate();
   let filteredCategory = categories.filter((category) => category.id === formData.category)[0];
 
   let updatedSubCategory = [...filteredCategory.subCategory]; 
   if(updatedSubCategory.length != 0) {
    updatedSubCategory.push(formData.subCategoryName);
   } else {
    updatedSubCategory = [formData.subCategoryName];
   }
  
   let upadtedCategory = {
     ...filteredCategory,
     subCategory:updatedSubCategory
   }
    
    try {
      
     console.log(upadtedCategory);

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
     navigate('/NewSubCategory');
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

           <span className="register-wrap register-half" style={{marginTop: "10px", width:"80%"}}>
                <label>Category</label>
                <div className="rg-select-inner  ">
                    <select
                        name="category"
                        required=""
                        className={errors.category ? 'register-select form-select form-select-sm error' : 'register-select form-select form-select-sm'}
                        id="select-category"
                        onChange={handleChange}
                        >
                        <option value="" disabled>--Select Category--</option>
                        {categories.map((category) =>(
                          <option value={category.id} key={category.id}>{category.name}</option>     
                        ))}
                         
                    </select>           
                </div>       
                {errors.category && <span className="error-message">{errors.category}</span>}   
            </span>

          <span className="register-wrap register-half" style={{width:"80%"}}>
                <label for="subCategoryName">Sub Category Name*</label>
                <div>
                    <input
                            placeholder="Sub Category Name"
                            required=""
                            className={errors.subCategoryName ? 'form-control error' : 'form-control'}
                            type="text"
                            value={formData.subCategoryName}
                            id="subCategoryName"
                            name="subCategoryName"
                            onChange={handleChange}
                        />
                {errors.subCategoryName && <span className="error-message">{errors.subCategoryName}</span>}
                </div>
            </span>

            
            <span className="register-wrap register-btn" style={{marginTop: "10px", justifyContent:'end'}}>            
                <button className="btn-1" type="submit" >Add</button></span>
        </form>   

    </div>
  );
};

export default NewSubCategoryForm;