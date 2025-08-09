# incipere-ecommerce

A full-stack e-commerce application built with React (frontend), Spring Boot (backend), MySQL database, Bootstrap UI, and basic authentication. Features include stock management, purchase orders, admin controls, delegated admin, customer and seller accounts.

## Features

- User authentication (Admin, Delegate Admin, Seller, Customer)
- Product and stock management
- Purchase order management
- Admin dashboard and controls
- Seller and customer account management
- Responsive Bootstrap UI

## Tech Stack

- **Frontend:** React, Bootstrap
- **Backend:** Java Spring Boot
- **Database:** MySQL

## Getting Started

### Prerequisites

- Node.js & npm
- Java 17+
- MySQL

### Backend Setup

1. Navigate to the backend folder:
    ```sh
    cd backend
    ```
2. Configure `src/main/resources/application.properties` with your MySQL credentials.
3. Build and run the Spring Boot app:
    ```sh
    mvn spring-boot:run
    ```

### Frontend Setup

1. Navigate to the frontend folder:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the React app:
    ```sh
    npm start
    ```
   > **If you see an error about `react-scripts` not found, run:**
   > ```sh
   > npm install react-scripts --save
   > ```
   > Then try `npm start` again.

## Database

- Create a MySQL database named `incipere_ecommerce`.
- The backend will auto-create tables on startup.

## Folder Structure

```
incipere-ecommerce/
  ├── backend/
  └── frontend/
      ├── public/
      │   └── index.html
      ├── src/
      │   ├── components/
      │   │   └── Navbar.tsx
      │   ├── pages/
      │   │   ├── Home.tsx
      │   │   ├── AdminDashboard.tsx
      │   │   ├── SellerDashboard.tsx
      │   │   └── CustomerDashboard.tsx
      │   ├── services/
      │   │   └── api.ts
      │   ├── App.tsx
      │   ├── index.tsx
      │   └── types/
      │       └── index.ts
      ├── package.json
      ├── tsconfig.json
      └── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.