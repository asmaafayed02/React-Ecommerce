import React from 'react'
import { NavLink } from "react-router-dom";

const RenderProducts = (props) => {
    let {setFilter, filteredProducts,filter,data} = props
  return (
    <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() =>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() =>filteredProducts("men's clothing")}>Men's clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() =>filteredProducts("women's clothing")}>Women's clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() =>filteredProducts("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={() =>filteredProducts("electronics")}>Electronics</button>
        </div>
        {filter.map((product) => {
          return (
            
              <div className="col-sm-4 col-lg-3 mb-4" key={product.id}>
                <div className="card h-100 text-center p-4 shadow fade-in" >
                  <img src={product.image} alt={product.title} className="card-img-top " height='70%' />
                  <div className="card-body">
                    <h3 className="card-title fs-4">{product.title.substring(0, 12)}...</h3>
                    <p className="card-text lead fw-bold">
                      ${product.price}
                    </p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            
          );
        })}
      </>
  )
}

export default RenderProducts