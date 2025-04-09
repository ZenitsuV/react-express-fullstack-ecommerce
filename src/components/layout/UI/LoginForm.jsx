import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../store/auth';


const LoginForm = ({isCheckout}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const [errors, setErrors] = useState({
      email: '',
      password: '',
      form: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
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
  
    const validateForm = () => {
      const newErrors = {
        email: '',
        password: '',
        form: ''
      };
      let isValid = true;
  
      if (!formData.email) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        isValid = false;
      }
  
      if (!formData.password) {
        newErrors.password = 'Password is required';
        isValid = false;
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
      }
  
      setErrors(newErrors);
      return isValid;
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!validateForm()) return;
      
      setIsSubmitting(true);

      try {
        // Using Redux action
         dispatch(loginUser({
          email: formData.email,
          password: formData.password
        }));

      } catch (error) {
        setErrors({
          ...errors,
          form: error.message || 'Login failed. Please check your credentials.'
        });
      } finally {
        setIsSubmitting(false);
      }

    console.log(isSubmitting);
   };



    return (
        <>
            {errors.form && <div className="error-message" style={{textAlign: "center", marginBottom: "15px", fontSize: "1rem"}}>{errors.form}</div>}
            <div className='login-container'>
                    <form  onSubmit={handleSubmit} className="login-form">
                        <span className="login-wrap">
                            <label>Email Address*</label>
                                <div>
                                    <input
                                        placeholder="Enter your email add..."
                                        required=""                            
                                        type="text"
                                        value={formData.email}
                                        name="email"
                                        onChange={handleChange}
                                        className={errors.email ? 'form-control error' : 'form-control'}
                                    />
                                  {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>
                            </span>
                            <span className="login-wrap" style={{marginTop: "24px"}}>
                            <label>Password*</label>
                                <div>
                                    <input
                                        min="6"
                                        placeholder="Enter your password"
                                        required=""                              
                                        type="password"
                                        value={formData.password}
                                        name="password"
                                        onChange={handleChange}
                                        autoComplete='off'
                                        className={errors.password ? 'form-control error' : 'form-control'}
                                    />
                                {errors.password && <span className="error-message">{errors.password}</span>}
                                </div>
                          </span>

                            {!isCheckout && 
                             <span className="login-wrap login-fp">
                                <label><a href="/forgot-password/">Forgot Password?</a></label>
                            </span> }
                            
                            <span className="login-wrap login-btn">
                                {!isCheckout && <span><a href="/register" className="">Create Account?</a></span>}
                                {isCheckout && <button className="btn-1 btn" type="submit" style={{marginTop:"10px"}} disabled={isSubmitting}>Continue</button>}
                                {!isCheckout && <button className="btn-1 btn" type="submit" disabled={isSubmitting}> {isSubmitting ? 'Signing In...' : 'Sign In'}</button>}
                            </span>
                        </form>
                </div>
            
        </>
    )
}

export default LoginForm;