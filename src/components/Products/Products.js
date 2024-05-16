import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "../Shared/Loading";
import RenderProducts from "./RenderProducts";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Set loading to true when starting the API request
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Set product data when API request succeeds
        setData(response.data);
        setFilter(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        // Set loading to false when request completes (whether success or error)
        setLoading(false);
      });
  }, []);

  const filteredProducts = (category) => {
    const updatedList = data.filter((x) => x.category === category);
    setFilter(updatedList);
  };

  return (
    <section>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="display-6 text-center fw-bold">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : (
            <RenderProducts
              filter={filter}
              data={data}
              filteredProducts={filteredProducts}
              setFilter={setFilter}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
