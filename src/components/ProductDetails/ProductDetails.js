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
    // Set loading to true when starting the API request
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        // Set product data when API request succeeds
        setProduct(response.data);
      })
      .catch((error) => {
        // Handle errors here if needed
        console.error("Error fetching product:", error);
      })
      .finally(() => {
        // Set loading to false when request completes (whether success or error)
        setLoading(false);
      });
  }, [id]); // Include id in the dependency array to trigger effect when id changes

  return (
    <section>
      <div className="container py-4">
        <div className="row py-4">
          {loading ? (
            <Loading /> // Show loading component while data is being fetched
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
