import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const SpecificStyle = (props) => {

  return (
    <div id="specific-style">
      {props.styleClicked === props.style.name
        ? <FontAwesomeIcon id="checkmark" icon={faCheckCircle} />
        : null
      }
      <img className="icon" src={props.style.photos[0].thumbnail_url} onClick={() => { props.setChosenStyle(props.style); props.toggleClick(props.style.name); props.setMainImg(props.style.photos[0].thumbnail_url) }} />
    </div>
  )
};

export default SpecificStyle;