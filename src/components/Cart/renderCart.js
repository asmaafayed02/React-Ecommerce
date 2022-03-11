import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {deleteFromCart} from "../../redux/action";
const RenderCart = (props) => {
    const cartItem = props.cartItem
    const dispatch = useDispatch()
    const handleClose = (item) =>{
        dispatch(deleteFromCart(item));
      }
  return (
    <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
    <div className="container py-4 bg-white">
      <button
        className="btn btn-close float-end bg-light"
        aria-label="Close"
        onClick={()=>{handleClose(cartItem)}}
      ></button>
      <div className="row justify-content-center">
        <div className=" col-md-4">
          <img
            src={cartItem.image}
            alt={cartItem.title}
            width="80%"
            height='250vh'
                        
            
          />
        </div>
        <div className="col-md-4 align-items-center flex-column d-flex py-2">
          <h3>{cartItem.title}</h3>
          <p className='lead fw-bold'>price: ${cartItem.price}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RenderCart