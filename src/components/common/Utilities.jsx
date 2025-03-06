import React from 'react';

export const Icon = ({ name, className, style }) => {
    return (
      <span className={`material-symbols-outlined ${className ? className : ''}`} style={style}>
        {name}
      </span>
    );
  };