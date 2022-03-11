import React from "react";
import {NavLink} from 'react-router-dom'
const RenderProduct = (props) => {
  const { product, addProduct, cartBtn } = props;
  return (
    <>
      <div className="col-md-6">
        <img src={product.image} className="shadow rounded" alt={product.title} width="90%" />
      </div>
      <div className="col-md-6">
        <p className="text-uppercase text-black-50">{product.category}</p>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating: {product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <p className="fw-bold display-6">Price: {product.price}</p>
        <p className="lead py-1">{product.description}</p>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => addProduct(product)}
        >
          {cartBtn}
        </button>
        <NavLink to="/cart" className="btn btn-dark me-2">
          Go to Cart
        </NavLink>
      </div>
    </>
  );
};

export default RenderProduct;
