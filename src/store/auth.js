import React from 'react';
import { useNavigate } from 'react-router-dom';
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial State
const initialAuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false
};

// Action Types
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const logoutUser = () => ({
  type: LOGOUT
});

// Thunk Action for Login
export const loginUser = (credentials) => {
    
  return async (dispatch) => {
    dispatch(loginRequest());
    
    try {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
          body: JSON.stringify(credentials),
        });
        
        if (!response.ok) {
        throw new Error('Invalid email or password');
        }
        
        const data = await response.json();
        // Save token to localStorage or cookies
        localStorage.setItem('authToken', data.token);
        dispatch(loginSuccess(data.user));

        const navigate = useNavigate();
        navigate('/');
    } catch (error) {
      dispatch(loginFailure(error.message || 'Login failed'));
    }
  };
};

// Thunk Action for Checking Auth Status
export const checkAuth = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('authToken');
    if (!token) return;
    
    dispatch(loginRequest());
    
    try {
        const response = await fetch('/api/check-auth', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (response.ok) {
            const userData = await response.json();
            dispatch(loginSuccess(userData));
          } else {
            localStorage.removeItem('authToken');
          }
        
    } catch (error) {
      localStorage.removeItem('authToken');
    }
  };
};



// Reducer
const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
        isAuthenticated: true
      };
      
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
        isAuthenticated: false
      };
      
    case LOGOUT:
      localStorage.removeItem('authToken');
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
      
    default:
      return state;
  }
};


export default authReducer;