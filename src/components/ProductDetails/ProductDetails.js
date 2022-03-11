import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/action";
import Loading from "../Shared/Loading";
import RenderProduct from "./RenderProduct";
import axios from "axios";
const Product = () => {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [cartBtn, setCart] = useState("Add To Cart");
  const dispatch = useDispatch();
  const addProduct = (product) => {
    if (cartBtn === "Add To Cart") {
      dispatch(addToCart(product));
      setCart("Remove From Cart");
    } else {
      dispatch(deleteFromCart(product));
      setCart("Add To Cart");
    }
  };
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setLoading(true);
      setProduct(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <section>
      <div className="container py-4">
        <div className="row py-4">
          {loading ? (
            <Loading />
          ) : (
            <RenderProduct
              product={product}
              addProduct={addProduct}
              cartBtn={cartBtn}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
