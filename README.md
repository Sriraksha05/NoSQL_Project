# E-Commerce Catalog

This is a full-stack e-commerce catalog web application built using **React** for the front-end and **Flask** for the back-end. The application allows users to view, add, update, and delete products in an e-commerce catalog.

## Features

- **Frontend**: React.js
  - View a list of products
  - Add new products
  - Update and delete products
- **Backend**: Flask (Python)
  - RESTful API to manage product and user data
  - MongoDB as the database

## Technologies Used

- **Frontend**: 
  - React.js
  - HTML, CSS
- **Backend**: 
  - Flask (Python)
  - MongoDB
  - CORS for cross-origin requests
- **Environment**:
  - Node.js
  - Python 3
  - MongoDB

## Installation

### Backend (Flask API)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-catalog.git
   cd ecommerce-catalog/backend
   ```

2. Install the required Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Make sure **MongoDB** is running on your local machine or update the database URI in the `config.py` file:
   ```bash
   python -m flask run
   ```

   By default, Flask will run the backend on `http://localhost:5000`.

### Frontend (React.js)

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install the required Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

### Environment Configuration

Create a `.env` file in the **frontend** directory with the following content:

```bash
REACT_APP_API_URL=http://localhost:5000
```

Running Locally

1. Run the Flask backend on `http://localhost:5000`:
   ```bash
   python -m flask run
   ```

2. Run the React frontend on `http://localhost:3000`:
   ```bash
   npm start
   ```

3. Access the application at `http://localhost:3000` in your browser.

## Folder Structure

```
ecommerce-catalog/
├── backend/
│   ├── app.py
│   ├── routes/
│   │   ├── home.py
│   │   ├── products.py
│   │   └── users.py
│   ├── models/
│   │   ├── product.py
│   │   └── user.py
│   ├── requirements.txt
│   └── config.py
└── frontend/
    ├── public/
    │   ├── index.html
    ├── src/
    │   ├── api/
    │   │   └── api.js
    │   ├── components/
    │   │   ├── AddProduct.jsx
    │   │   └── ProductList.jsx
    │   ├── pages/
    │   │   └── Home.jsx
    │   ├── App.js
    │   └── index.js
    ├── .env
    ├── package.json
    └── index.css
```
