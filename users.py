from flask import Blueprint, jsonify, request
from flask_cors import CORS  # Import CORS
from models.user import users_collection

user_routes = Blueprint("user_routes", __name__)
CORS(user_routes)  # ✅ Apply CORS to users routes

@user_routes.route("/", methods=["GET"])
def get_users():
    users = list(users_collection.find({}, {"_id": 0}))
    return jsonify(users)

@user_routes.route("/register", methods=["POST"])
def register_user():
    data = request.json
    users_collection.insert_one(data)
    return jsonify({"message": "User registered successfully!"}), 201
