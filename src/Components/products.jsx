/** @format */
import React, { useState } from 'react';
import { getProducts } from "../MockData/mockproducts";
import "../StyleSheets/products.css";


const Products = ({cart,setCart}) => {
  const [products, setProducts] = useState(getProducts());
  const [cartItemsQnt, setCartItemsQnt] = useState(0);

  // Updates the quantity of a product in the state based on user input, ensuring it's greater than 0.
  const handleQunatityBtn = (e, prdIndex) => {
    if (e.target.value > 0) {
      const updatedProducts = [...products];
      updatedProducts[prdIndex] = { ...updatedProducts[prdIndex], quantity: e.target.value };
      setProducts(updatedProducts);
    }
  };

  // Handles the "Add to Cart" or "Remove" button click for a product, updating UI and cart state accordingly.
  const handleCartBtn = (e, prdIndex) => {
    // If the button is in "add" state, adds the product to the cart; otherwise, removes it.
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

  // Adds a product to the cart, updating the cart state and total cart items quantity.
  const addPrdToCart = (prd) => {
    const newCartItem = { prdName: prd.prdName, quantity: prd.quantity || 1 };
    setCart([...cart, newCartItem]);
    setCartItemsQnt(cartItemsQnt+newCartItem.quantity)
  };

  // Removes a product from the cart, updating the cart state and total cart items quantity.
  const removePrdFromCart = (prd) => { 
    const newCart = cart.filter((item) => item.prdName !== prd.prdName);
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
