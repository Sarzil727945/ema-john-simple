import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
     const [products, setProducts] = useState([]);
     useEffect(() => {
          fetch("products.json")
               .then(res => res.json())
               .then(data => setProducts(data))
     }, []);

     const [cart, setCart] = useState([]);
     const productAdd = (product) => {
          const newCart = [...cart, product];
          setCart(newCart);
     }
     return (
          <div className='Shop-div1'>
               <div className='subShop-div1-1'>
                    {
                         products.map(data => <Product
                              key={data.id}
                              product={data}
                              productAdd={productAdd}
                         ></Product>)
                    }
               </div>
               <div className='subShop-div1-2'>
                    <Card cart ={cart}></Card>
               </div>
          </div>
     );
};

export default Shop;