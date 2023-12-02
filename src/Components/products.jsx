/** @format */

import React, { Component } from "react";
import { getProducts } from "../MockData/mockproducts";
import "../StyleSheets/products.css";

class Products extends Component {
  state = {
    products: getProducts(),
    cart: [],
    cartItemsQnt: 0,
  };

  handleQunatityBtn = (e, prd) => {
    if (e.target.value > 0) {
      // Use spread operator to create a new array of products with updated quantity
      const updatedProducts = [...this.state.products];
      updatedProducts[prd].quantity = e.target.value;

      // Update state with the new array of products
      this.setState({ products: updatedProducts });
    }
  };

  handleCartBtn = (e, prd) => {
    if (e.target.btnType === 'add') {
      this.addPrdToCart(prd);
      e.target.innerHTML = 'Remove';
      e.target.btnType = 'rmv';
      e.target.className = 'btn btn-outline-danger';
      console.log(`cart : ${this.state.cart}`)
      console.log(`Cart Qunaity : ${this.state.cartItemsQnt}`)
    } else {
      this.removePrdFromCart(prd);
      e.target.innerHTML = 'Add To Cart';
      e.target.btnType = 'add';
      e.target.className = 'btn btn-outline-warning';
    }
  };

  addPrdToCart = (prd) => {
    const newCartItem = { prdName: prd.prdName, quantity: prd.quantity || 1 };

    // Use the spread operator to create a new array with the new item
    const newCart = [...this.state.cart, newCartItem];

    // Use setState to update the cart state
    this.setState({ cart: newCart }, () => {
      // After updating the state, call the method to update cartItemsQnt
      this.updateCartItemsQnt();
    });
  };

  removePrdFromCart = (prd) => {
    // Use filter to create a new cart array without the specified product
    const newCart = this.state.cart.filter((item) => item.prdName !== prd.prdName);

    // Use setState to update the cart state
    this.setState({ cart: newCart }, () => {
      // After updating the state, call the method to update cartItemsQnt
      this.updateCartItemsQnt();
    });
  };

  updateCartItemsQnt = () => {
    const newCnt = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);

    // Use setState to update the cartItemsQnt state
    this.setState({ cartItemsQnt: newCnt });
  };

  render() {
    return (
      <div id='prdCnt'>
        <div className='prdLists'>
          {this.state.products.map((prd, index) => (
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
                    onChange={(e) => this.handleQunatityBtn(e, index)}
                  />
                </div>
                <div className='prdAddtoCartBtn'>
                  <button
                    type='button'
                    className='btn btn-outline-warning'
                    btnType='add'
                    onClick={(e) => this.handleCartBtn(e, index)}
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
  }
}


export default Products;
