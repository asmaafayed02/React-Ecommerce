import React from 'react'
import { NavLink } from "react-router-dom"
const CheckoutBtn = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-4 mx-auto">
      <NavLink to="/checkout" className="btn btn-outline-dark mb-5 py-2  mx-auto">Proceed to Checkout</NavLink>
        
        </div>
      </div>
    </div>
  )
}

export default CheckoutBtn