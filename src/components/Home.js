import React from 'react'
import Header from'./Header/header'
import Products from "./Products/Products";

const Home=()=> {
  return (
    <>
      <Header/>
      <main >
        <Products />
      </main>
    </>
  );
}

export default Home;
