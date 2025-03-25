E-Commerce Platform (MERN Stack)

Overview

This is a custom-built e-commerce platform using the MERN stack (MongoDB, Express.js, React, Node.js). The platform offers a seamless shopping experience with modern UI, user authentication, and dynamic product management.

Features

Modern UI & UX with an engaging hero section and responsive design.

Product Management – Display, categorize, and filter products.

User Authentication – Sign-up, login, and account management.

Shopping Cart – Add, remove, and checkout products.

Secure Payments – Integrated with payment gateways.

Admin Dashboard – Manage products, users, and orders.


Installation

Prerequisites

Ensure you have the following installed:

Node.js (v14 or higher)

MongoDB (local or cloud)

Steps

Clone the repository:

git clone https://github.com/your-repo/ecommerce-platform.git

Navigate to the project directory:

cd ecommerce-platform

Install dependencies for both frontend and backend:

npm install
cd client && npm install

Configure environment variables (.env file for backend):

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
STRIPE_SECRET=your_stripe_key

Start the backend:

npm run server

Start the frontend:

cd client && npm start

Technologies Used

Frontend: React.js, Redux, TailwindCSS

Backend: Node.js, Express.js, MongoDB, JWT Authentication

Payment Gateway: Stripe

Contributing

Feel free to contribute to this project by creating pull requests or reporting issues.

License
