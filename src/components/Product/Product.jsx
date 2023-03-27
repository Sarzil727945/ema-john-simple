import React from 'react';
import './Product.css';

const Product = (props) => {
     const { img, name, price, seller, ratings } = props.product;
     return (
          <div className='product'>
               <img src={img} alt="" />
               <div className='product-info'>
                    <h2 className='product-name'> {name}</h2>
                    <h3>Price: ${price}</h3>
                    <div className='subProduct-info'>
                         <p>Manufacturer: {seller}</p>
                         <p>Rating: {ratings} start</p>
                    </div>
               </div>
               <button className='btn-cart'>Add to Cart</button>
          </div>
     );
};

export default Product;