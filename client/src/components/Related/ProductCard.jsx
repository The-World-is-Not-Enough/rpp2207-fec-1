import React, { useState, useEffect } from 'react';

const RelatedProduct = (props) => {
  return (
    <div className='product-card-container'>
      <img className='product-card-image' src={props.product.styles.results[0].photos[0].thumbnail_url}>
      </img>
      <div className='product-card-action-btn'></div>
      <div className='product-card-description'>
        <div className='product-card-category'>{props.product.category}</div>
        <div className='product-card-name'>{props.product.name}</div>
        <div className='product-card-price'>${props.product.default_price}</div>
        <div className='product-card-stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      </div>
    </div>
  )
}

export default RelatedProduct;