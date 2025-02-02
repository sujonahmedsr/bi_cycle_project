# Bicycle Store Application Cycle_labs

A bicycle store application that allows users to register, browse bicycles, manage orders, and make payments. Admins can manage users and products, while customers can view bicycles, place orders, and manage their profiles. The app is fully responsive and integrates with a payment gateway for secure transactions.

## Project Features

### Front End Link: - **https://cycle-labs.netlify.app/**
### Backend End Link: - **https://cycle-labs-backend.vercel.app/**

### Admin Credentials 
- **Email** : sujon@gmail.com
- **Password** : 1234567

## Project Features

### 1. User Registration & Authentication
- **Secure Registration & Login**: Users can register and log in with their email and password.
- **Role-Based Authentication**: Default user roles are "customer" and "admin".
- **JWT Authentication**: A token is generated for secure user sessions.
- **Logout**: Users can log out, which will remove the JWT token from local storage.

### 2. Public Routes
- **Home Page**: 
  - Logo, navigation, login/signup buttons.
  - Carousel for special offers.
  - Featured bicycles with a "View All" button.
  - Footer with social media and contact details.

- **All Bicycles Page**:
  - Search functionality by brand, name, or category.
  - Filters for price range, model, and availability.
  - Bicycle cards with a "View Details" button.

- **Bicycle Details Page**:
  - Display bicycle image, specifications, and "Order Now" and "Add to Cart" button.
  
- **About Page**:
  - Information about the bicycle shop and its mission.

### 3. Private Routes
- **Checkout Page**:
  - Users can place orders for bicycles.
  - Order form includes product details, user details, and total price calculation.
  - Payment integration with SurjoPay.
  
- **Dashboard**:
  - **Admin Dashboard**: Manage users, products, and orders (CRUD operations).
  - **User Dashboard**: View orders, update profile, and change passwords.



## Backend Requirements
- **Database**: MongoDB with schemas for users, bicycles, and orders.
- **Authentication**: Secure user registration, login, and JWT token management.
- **Product Management**: CRUD operations for bicycles.
- **Order Management**: CRUD operations for orders, ensuring stock levels.
- **Payment Integration**: Support for SurjoPay.
- **Error Handling**: Consistent error messages across the application.
- **Authentication Middleware**: Protect private routes like the checkout and dashboard.


### Project Overview Short video : - ** coming soon **
