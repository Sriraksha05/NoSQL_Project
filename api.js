const API_URL = process.env.REACT_APP_API_URL;

export const fetchProducts = async () => {
    const response = await fetch(`${API_URL}/products/get_products`);
    return response.json();
};

export const addProduct = async (product) => {
    const response = await fetch(`${API_URL}/products/add_product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });

    const data = await response.json();

    // Redirect after successful POST request
    if (response.ok) {
        window.location.href = `http://localhost:3000`; 
    }

    return data;
};
// **Update Product**
export const updateProduct = async (productId, updatedData) => {
    const response = await fetch(`${API_URL}/products/update_product/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
    });
    return response.json();
};

// **Delete Product**
export const deleteProduct = async (productId) => {
    const response = await fetch(`${API_URL}/products/delete_product/${productId}`, {
        method: "DELETE",
    });
    return response.json();
};
