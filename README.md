# AQUATECH E-COMMERCE WEB APPMERN

This is an online store where users can browse products, add them to their cart, and checkout using a payment gateway. It will built using the MERN (MongoDB, Express.js, React, Node.js) stack and integrates popular payment gateways like Stripe or PayPal.

## Installation

To install the app, first clone the repository:

### git clone https://github.com/hardika-spec-610/{projectName}

Then navigate to the project directory and install the dependencies:

```javascript
cd {projectName}
npm install
```

Finally, start the app:

```javascript
npm start
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

## Features

- Browse products by category or search for specific products
- Load more
- View detailed product information, including images, description, and pricing also recommendation product
- Add products to cart and adjust the quantity with toast notification
- Checkout using a payment gateway (Stripe or PayPal)
- Authenticate users using JSON Web Tokens (JWT)
- User registration and login with secret question( if we forgot the password, we can reset it by visiting the "forgot-password" page by filling email,secret question and new password )
- On the order page, users can view the status of their purchased product along with details such as the buyer's name, order date, payment status, and quantity.
- User profile management
- Admin dashboard to manage products, categories, and orders
- The admin login feature allows authorized personnel to access the backend of the e-commerce platform, where they can manage products, orders, and other relevant information.

## Technologies Used in Backend & Frontend

- Node.js
- Express.js
- MongoDB
- Mongoose
- jsonwebtoken
- Passport.js
- passport-google-oauth20
- react
- Material UI or Bootstrap(not decided)
