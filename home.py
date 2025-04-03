from flask import Blueprint
from flask_cors import CORS  # Import CORS

home_route = Blueprint("home", __name__)
CORS(home_route)  # ✅ Apply CORS to home route

@home_route.route("/", methods=["GET"])
def index():
    return "The app is working!"
