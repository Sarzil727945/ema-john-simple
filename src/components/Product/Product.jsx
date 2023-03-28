import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
     const { img, name, price, seller, ratings } = props.product;
     const productAdd = props.productAdd;

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
               <button onClick={() => productAdd(props.product)} className='btn-cart'>
                    Add to Cart 
                     <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
          </div>
     );
};

export default Product;