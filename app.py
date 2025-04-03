from flask import Flask
from flask_cors import CORS  # Import CORS
from routes.products import product_routes  
from routes.users import user_routes  
from routes.home import home_route  

app = Flask(__name__)
CORS(app)  # ✅ Enables CORS globally for all routes

# Register Blueprints
app.register_blueprint(home_route)  
app.register_blueprint(product_routes, url_prefix="/products")  
app.register_blueprint(user_routes, url_prefix="/users")  

if __name__ == "__main__":
    app.run(debug=True)
