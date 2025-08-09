# Frontend E-commerce Application

This is the frontend part of the e-commerce application built using React and TypeScript. The application provides a user-friendly interface for customers, sellers, and administrators to manage products, orders, and user accounts.

## Project Structure

- **public/index.html**: The main HTML file for the React application.
- **src/components/Navbar.tsx**: Contains the navigation bar component.
- **src/pages/Home.tsx**: Displays the homepage of the e-commerce site.
- **src/pages/AdminDashboard.tsx**: Interface for admin users to manage the application.
- **src/pages/SellerDashboard.tsx**: Allows sellers to manage their products and orders.
- **src/pages/CustomerDashboard.tsx**: Provides customers access to their account and order history.
- **src/services/api.ts**: Functions for making API calls to the backend and handling user authentication.
- **src/App.tsx**: Main application component that sets up routing.
- **src/index.tsx**: Entry point for the React application.
- **src/types/index.ts**: TypeScript interfaces for data structures used in the application.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```
   cd ecommerce-app/frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## Features

- User authentication for customers and sellers.
- Admin control for managing users and products.
- Seller accounts for managing their own products and orders.
- Customer accounts for tracking orders and account details.

## Technologies Used

- React
- TypeScript
- Bootstrap
- Axios (for API calls)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.