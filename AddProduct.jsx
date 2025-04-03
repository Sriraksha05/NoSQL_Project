import React, { useState } from "react";
import { addProduct } from "../api/api";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        stock: "",
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(product);
        alert("Product Added Successfully!");
        setProduct({ name: "", price: "", category: "", stock: "" });
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
                <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required />
                <input type="text" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} required />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
