import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
       firstName: '',
       lastName: '',
       email:'',
       phoneNumber:'',
       password:'',
       confirmPassword:'',
       address:'',
       country:'',
       regionState:'',
       city:'',
       postCode:''
    })
    const [errors, setErrors] = useState({});
     
   
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

    console.log(formData);

  const validateForm = () => {
    const newErrors= {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phoneNumber) {
        newErrors.phoneNumber = 'Phone number is required';
      } else if (!/^\d{10,12}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Email is invalid';
      }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Confirm Password is required';
      } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.address) {
        newErrors.address = 'Address is required';
    }

    if (!formData.country) {
        newErrors.country = 'Country is required';
    }

    if (!formData.regionState) {
        newErrors.regionState = 'State is required';
    }

    if (!formData.city) {
        newErrors.city = 'City is required';
    }
 
    if (!formData.postCode) {
        newErrors.postCode = 'Postcode is required';
      } else if (!/^\d{5,6}$/.test(formData.postCode)) {
        newErrors.postCode = 'Postcode is invalid';
      }
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
       const formObj = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            password: formData.password,
            address: formData.address,
            country: formData.country,
            regionState: formData.regionState,
            city: formData.city,
            postCode: formData.postCode
      };
      
     console.log(formObj);

      // Send data to your backend API
      /* const response = await fetch('/api/register', {
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
     navigate('/login');
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
      <h2>Create an Account</h2>
      {errors.form && <div className="error-message">{errors.form}</div>}
      
      <form onSubmit={handleSubmit}>
        <span className="register-wrap register-half">
            <label for="firstname">First Name*</label>
            <div>
                <input
                        placeholder="Enter your first name"
                        required=""
                        className={errors.firstName ? 'form-control error' : 'form-control'}
                        type="text"
                        value={formData.firstName}
                        id="firstName"
                        name="firstName"
                        onChange={handleChange}
                    />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            </span>
            
            <span className="register-wrap register-half">
                <label>Last Name*</label>
                <div>
                    <input
                            placeholder="Enter your last name"
                            required=""
                            className={errors.lastName ? 'form-control error' : 'form-control'}
                            type="text"
                            value={formData.lastName}
                            name="lastName"
                            id="lastName"
                            onChange={handleChange}
                        />
                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Email*</label>
                <div>
                    <input
                        placeholder="Enter your email add..."
                        required=""
                        className={errors.email ? 'form-control error' : 'form-control'}
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                        />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Phone Number*</label>
                <div>
                    <input
                        placeholder="Enter your phone number"
                        pattern="^\d{10,12}$"
                        required=""
                        className={errors.phoneNumber ? 'form-control error' : 'form-control'}
                        type="text"
                        value={formData.phoneNumber}
                        name="phoneNumber"
                        onChange={handleChange}
                        />
                        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
                </div>
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Password*</label>
                <div>
                    <input
                        placeholder="Enter your password"
                        pattern="^\d{6,12}$"
                        required=""
                        autoComplete="off"
                        className={errors.password ? 'form-control error' : 'form-control'}
                        type="password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
            </span>
            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Conform Password*</label>
                <div>
                    <input
                        placeholder="Enter your Conform password"
                        pattern="^\d{6,12}$"
                        required=""
                        className={errors.confirmPassword ? 'form-control error' : 'form-control'}
                        type="password"
                        value={formData.confirmPassword}
                        name="confirmPassword"
                        onChange={handleChange}
                        />
                        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
            </span>

            <span className="register-wrap" style={{marginTop: "10px"}}>
                <label>Address</label>
                <div>
                    <input
                        placeholder="Address Line 1"
                        required=""
                        className={errors.address ? 'form-control error' : 'form-control'}
                        type="text"
                        value={formData.address}
                        name="address"
                        style={{width:"97%"}}
                        onChange={handleChange}
                        />
                    {errors.address && <span className="error-message">{errors.address}</span>}
                </div>
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Country *</label>
                <div className="rg-select-inner  ">
                    <select
                        name="country"
                        required=""               
                        className={errors.country ? 'register-select form-select form-select-sm error' : 'register-select form-select form-select-sm'}
                        id="select-country"
                        onChange={handleChange}
                        >
                        <option value="">Country</option>
                        <option value="IN">India</option>      
                    </select>    
                </div>
                {errors.country && <span className="error-message">{errors.country}</span>}
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Region State</label>
                <div className="rg-select-inner  ">
                    <select
                        name="regionState"
                        required=""
                        className={errors.regionState ? 'register-select form-select form-select-sm error' : 'register-select form-select form-select-sm'}
                        id="select-state"
                        onChange={handleChange}
                        >
                        <option value="">Region/State</option>
                        <option value="TN">Tamil Nadu</option>      
                    </select>           
                </div>       
                {errors.regionState && <span className="error-message">{errors.regionState}</span>}   
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>City *</label>
                <div className="rg-select-inner">
                    <select
                        name="city"
                        required=""
                        className={errors.city ? 'register-select form-select form-select-sm error' : 'register-select form-select form-select-sm'}
                        id="select-city"
                        onChange={handleChange}
                    >
                        <option value="">City</option>
                        <option value="CBE">Coimbatore</option>      
                    </select>               
                </div>
                {errors.city && <span className="error-message">{errors.city}</span>}
            </span>

            <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                <label>Post Code</label>
                <div>
                    <input
                        pattern="^\d{5,6}$"
                        placeholder="Post Code"
                        required=""
                        className={errors.postCode ? 'form-control error' : 'form-control'}
                        type="text"
                        value={formData.postCode}
                        name="postCode"
                        onChange={handleChange}
                        />
                    {errors.postCode && <span className="error-message">{errors.postCode}</span>}
                </div>
            </span>
            
            <span className="register-wrap register-btn" style={{marginTop: "10px"}}>
                <span>Already have an account?<a href="/login">Login</a></span>
                <button className="btn-1" type="submit">Register</button></span>
        </form>   

    </div>
  );
};

export default RegistrationForm;