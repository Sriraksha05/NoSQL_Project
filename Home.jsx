import React from "react";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";

const Home = () => {
    return (
        <div>
            <h1>Welcome to the E-commerce Catalog</h1>
            <AddProduct />
            <ProductList />
        </div>
    );
};

export default Home;
