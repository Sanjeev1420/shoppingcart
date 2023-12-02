/** @format */

import React, { Component } from "react";
import { getProducts } from "../MockData/mockproducts";
import "../StyleSheets/products.css";

class Products extends Component {
  state = {
    products: getProducts(),
    cart : []
    
  };

  render() {
    return (
      <div id='prdCnt'>
        <div className='prdLists'>
          {this.state.products.map((prd) => (
            <div className='prdItem'>
              <div className='imgSection'>
                <img src={prd.img} width='200' height='220' alt={prd.prdName} />
              </div>
              <div className='prdTitle'>{prd.prdName}</div>
              <div className='prdDes'>{prd.prdDescription}</div>
              <div className='prdPrice'>₹{prd.prdPrice}</div>
              <div className='prdBtns'>
                <div className='prdQntBtn'>
                  <label htmlFor="prdQunatity">Quantity</label>
                  <input type="number" className="prdQuantity" value="1"></input>
                </div>
                <div className='prdAddtoCartBtn'>
                <button type="button" class="btn btn-outline-warning" btnType="add">Add To Cart</button>
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
