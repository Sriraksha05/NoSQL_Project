from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client.ecommerce_db
products_collection = db.products
