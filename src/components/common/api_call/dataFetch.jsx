import React from 'react';


export const fetchCategories = async () => {
    try {
        let response = await fetch('category.json');
        let data = await response.json();
        return data;
     } catch(error) {
       console.log(error);
       return error;
     }
}