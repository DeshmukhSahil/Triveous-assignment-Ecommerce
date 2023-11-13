## Description

This repository is an assignment given by Triveous


## Getting Started

To run the API locally, follow the steps below:

### Install Dependencies

```bash
npm install
```

### Start the API

```bash
npm start
```
## API Documentation

* The API Routes are mentioned below

### Products

- **GET** /api/v1/products
- **GET** /api/v1/products/:id
- **POST** /api/v1/products
- **PUT** /api/v1/products/:id
- **DELETE** /api/v1/products/:id
- **PUT** gallery-images : /api/v1/products/gallery-images/:id
- **GET** featured products: /api/v1/products/get/featured/:count
- **GET** products count: /api/v1/products/get/count

### Orders

- **GET** /api/v1/orders
- **GET** /api/v1/orders/:id
- **POST** /api/v1/orders
- **PUT** /api/v1/orders/:id
- **DELETE** /api/v1/orders/:id
- **GET** orders count: /api/v1/orders/get/count

### Users

- **GET** /api/v1/users
- **GET** /api/v1/users/:id
- **POST** /api/v1/users
- **PUT** /api/v1/users/:id
- **DELETE** /api/v1/users/:id
- **GET** users count: /api/v1/users/get/count

### Categories

#   /api/v1/categories

# category ID is needed while posting a product

## Token is also needed for most of the routes

### User Authentication

#### Register new user

- **POST** /api/v1/users/register

#### Login user

To login and obtain the authentication token:

- **POST** /api/v1/users/login

## Deployment link: https://ecom-backend-tdhb.onrender.com/

# Deployment link might not work effeciently with some Apis because of some compatiblity issue with the dependencies at the server (working on it), however, every API works perfectly fine on localhost.


#### APIs testing using postman walkthrough video

https://drive.google.com/file/d/13HwZmt6sADJ19Ni2pBwtjihKnI64tOJ7/view?usp=sharing

## Thank you...

Looking forward to hear from you..
