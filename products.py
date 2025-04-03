from flask import Blueprint, jsonify, request
from flask_cors import CORS
from bson import ObjectId
from models.product import products_collection

product_routes = Blueprint("product_routes", __name__)
CORS(product_routes)  # Allow cross-origin requests

# Get all products
@product_routes.route("/get_products", methods=["GET"])
def get_products():
    products = list(products_collection.find({}, {"_id": 1, "name": 1, "price": 1, "category": 1, "stock": 1}))
    for product in products:
        product["_id"] = str(product["_id"])  # Convert ObjectId to string
    return jsonify(products)

# Add a product
@product_routes.route("/add_product", methods=["POST"])
def add_product():
    data = request.json
    product_id = products_collection.insert_one(data).inserted_id
    return jsonify({"message": "Product added successfully!", "product_id": str(product_id)}), 201

# **Update a product**
@product_routes.route("/update_product/<product_id>", methods=["PUT"])
def update_product(product_id):
    data = request.json
    filtered_data = {key: value for key, value in data.items() if value!=""}
    products_collection.update_one({"_id": ObjectId(product_id)}, {"$set": filtered_data})
    print(data)
    return jsonify({"message": "Product updated successfully!"})

# **Delete a product**
@product_routes.route("/delete_product/<product_id>", methods=["DELETE"])
def delete_product(product_id):
    products_collection.delete_one({"_id": ObjectId(product_id)})
    return jsonify({"message": "Product deleted successfully!"})

