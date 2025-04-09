import React from 'react';
import { useSelector } from 'react-redux';


export const Icon = ({ name, className, style }) => {
    return (
      <span className={`material-symbols-outlined ${className ? className : ''}`} style={style}>
        {name}
      </span>
    );
  };


export const accordianHandler = (e) => {
    e.target.classList.toggle("active");
    var panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    }      
};

export const handleSorting = (arr, sortOrder, column) => {
  arr.sort((x,y) => {
    let a = x[column];
    let b = y[column];
      if(sortOrder === "asc") {
        return a < b ? -1 : a > b ? 1 : 0; 
      } else {
        return a < b ? 1 : a > b ? -1 : 0;
      }
  });
}; 

export const getUserWishlist = () => {
  let filteredByUser;
  const favouriteItems = useSelector((state) => state.wishlist.favouriteItems);
  filteredByUser = favouriteItems.filter((item) => item.user === "admin");
  return filteredByUser;
}

 