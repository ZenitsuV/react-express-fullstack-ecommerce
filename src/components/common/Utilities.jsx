import React from 'react';

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
} 