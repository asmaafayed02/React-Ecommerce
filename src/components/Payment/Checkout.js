import React from "react";
import { useSelector } from "react-redux";
import PaymentForm from "./PaymentForm";
const Checkout = () => {
    const state = useSelector((state) => state.handelCart)
    let total = 0
    const itemList =(item)=>{
        total += item.price
        return(
            <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">{item.title.substring(0,12)}...</h6>
              
            </div>
            <span class="text-muted">${item.price}</span>
          </li>
        )
    }
  return (
    <section>
      <div className="container py-5">
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-danger">Your cart</span>
              <span class="badge bg-danger rounded-pill">{state.length}</span>
            </h4>
            <ul class="list-group mb-3">
             {state.map(itemList)}
           
              <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">−$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total}</strong>
              </li>
            </ul>

            <form class="card p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" class="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <PaymentForm/>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
