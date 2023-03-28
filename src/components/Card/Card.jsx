import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faArrowRight} from '@fortawesome/free-solid-svg-icons'
import './Card.css';

const Card = (props) => {
     const {cart} = props;

     let total = 0;
     let totalShipping = 0;
     for (const product of cart) {
          total  = total + product.price;
          totalShipping = totalShipping + product.shipping;
     }
     const tax = total*5/100;
     
     return (
          <div className='card'>
               <h2>Order Summary</h2>
               <div>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${total}</p>
                    <p>Total Shipping Charge: ${totalShipping}</p>
                    <p>Tax: ${tax}</p>
                    <h3>Grand Total: $</h3>
               </div>
               <div>
                    <button className='clear-btn'>Clear Cart  <FontAwesomeIcon icon={faTrash} /></button>
                    <button className='review-btn'>Review Order  <FontAwesomeIcon icon={faArrowRight} /></button>
               </div>
          </div>
     );
};

export default Card;