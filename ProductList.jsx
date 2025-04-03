import React, { useEffect, useState } from "react";
import { fetchProducts, updateProduct, deleteProduct } from "../api/api";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [updatedData, setUpdatedData] = useState({ name: "", price: "", category: "", stock: "" });

    // Fetch products
    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        getProducts();
    }, []);

    // **Handle update**
    const handleUpdate = async (productId) => {
        await updateProduct(productId, updatedData);
        alert("Product updated successfully!");
        window.location.reload();
    };

    // **Handle delete**
    const handleDelete = async (productId) => {
        await deleteProduct(productId);
        alert("Product deleted successfully!");
        setProducts(products.filter((product) => product._id !== productId));
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <strong>{product.name}</strong> - ₹{product.price} ({product.category}) ({product.stock})
                        <button onClick={() => setEditingProduct(product)}>Edit</button>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>

            {editingProduct && (
                <div>
                    <h3>Edit Product</h3>
                    <input
                            type="text"
                            placeholder="Name"
                            defaultValue={editingProduct.name}
                            onChange={(e) => {
                                const value = e.target.value.trim();
                                setUpdatedData((prev) => {
                                if (value) {
                                    return { ...prev, name: value };
                                } else {
                                    const { name, ...rest } = prev; // Remove the 'name' key
                                    return rest;
                                }
                                });
                              }}
                            />
                    <input type="number" placeholder="Price" defaultValue={editingProduct.price} onChange={(e) => setUpdatedData({ ...updatedData, price: e.target.value })} />
                    <input type="text" placeholder="Category" defaultValue={editingProduct.category} onChange={(e) => setUpdatedData({ ...updatedData, category: e.target.value })} />
                    <input type="text" placeholder="Stock" defaultValue={editingProduct.stock} onChange={(e) => setUpdatedData({ ...updatedData, stock: e.target.value })} />
                    <button onClick={() => handleUpdate(editingProduct._id)}>Save</button>
                </div>
            )}
        </div>
    );
};

export default ProductList;
