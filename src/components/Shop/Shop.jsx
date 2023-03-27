import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
     const [products, setProducts] = useState([]);
     useEffect(() =>{
          fetch("products.json")
          .then(res => res.json())
          .then(data => setProducts(data))
     }, [])
     return (
          <div className='Shop-div1'>
              <div className='subShop-div1-1'>
                    {
                         products.map(data => <Product key={data.id} product ={data}></Product>)
                    }
              </div> 
              <div className='subShop-div1-2'>
                    <h2>Order Summary</h2>
              </div>
          </div>
     );
};

export default Shop;