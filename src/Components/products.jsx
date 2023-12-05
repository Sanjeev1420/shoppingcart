/** @format */
import React, { useState } from 'react';
import { getProducts } from "../MockData/mockproducts";
import "../StyleSheets/products.css";


const Products = ({cart,setCart}) => {
  const [products, setProducts] = useState(getProducts());
  
  const [cartItemsQnt, setCartItemsQnt] = useState(0);

  const handleQunatityBtn = (e, prdIndex) => {
    if (e.target.value > 0) {
      const updatedProducts = [...products];
      updatedProducts[prdIndex] = { ...updatedProducts[prdIndex], quantity: e.target.value };
      setProducts(updatedProducts);
    }
  };

  const handleCartBtn = (e, prdIndex) => {
    if (e.target.value === 'add') {
      addPrdToCart(products[prdIndex]);
      e.target.innerHTML = 'Remove';
      e.target.value = 'rmv';
      e.target.className = 'btn btn-outline-danger';
    } else {
      removePrdFromCart(products[prdIndex]);
      e.target.innerHTML = 'Add To Cart';
      e.target.value = 'add';
      e.target.className = 'btn btn-outline-warning';
    }
  };

  const addPrdToCart = (prd) => {
    const newCartItem = { prdName: prd.prdName, quantity: prd.quantity || 1 };
    console.log('Cart:', newCartItem);
    setCart([...cart, newCartItem]);
    setCartItemsQnt(cartItemsQnt+newCartItem.quantity)
  };

  const removePrdFromCart = (prd) => {
    const newCart = cart.filter((item) => item.prdName !== prd.prdName);
    console.log('Cart:', newCart);
    setCart(newCart);
    setCartItemsQnt(cartItemsQnt-prd.quantity)
  };

  return (
    <div id='prdCnt'>
      <div className='prdLists'>
        {products.map((prd, index) => (
          <div key={index} className='prdItem'>
            <div className='imgSection'>
              <img src={prd.img} width='200' height='220' alt={prd.prdName} />
            </div>
            <div className='prdTitle'>{prd.prdName}</div>
            <div className='prdDes'>{prd.prdDescription}</div>
            <div className='prdPrice'>₹{prd.prdPrice}</div>
            <div className='prdBtns'>
              <div className='prdQntBtn'>
                <label htmlFor={`prdQuantity_${index}`}>Quantity</label>
                <input
                  type='number'
                  id={`prdQuantity_${index}`}
                  className='prdQuantity'
                  placeholder='1'
                  onChange={(e) => handleQunatityBtn(e, index)}
                />
              </div>
              <div className='prdAddtoCartBtn'>
                <button
                  type='button'
                  className='btn btn-outline-warning'
                  value='add'
                  onClick={(e) => handleCartBtn(e, index)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Products;
