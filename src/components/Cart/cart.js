import React from "react";
import { useSelector } from "react-redux";
import CheckoutBtn from "./CheckoutBtn";
import EmptyCart from "./emptyCart";
import RenderCart from "./renderCart";
const Cart = () => {
  const state = useSelector((state) => state.handelCart);

  return (
    <section>
      {state.length == 0 && <EmptyCart />}
      {state.length !== 0 &&
        state.map((state) => {
          return <RenderCart cartItem={state} />;
        })}
        {state.length !== 0 && <CheckoutBtn/>}
    </section>
  );
};

export default Cart;
