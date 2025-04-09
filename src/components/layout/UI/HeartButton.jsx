import React from 'react';
import './HeartButton.css';

const HeartButton = (props) => {
  const cssClassName = props.cssClass;

  return (
    <div className="heart_container">
      <div
        className={`heart ${cssClassName}`}
        onClick={props.onHeartClick}
      ></div>
    </div>
  );
};

export default HeartButton;
