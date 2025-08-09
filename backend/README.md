# E-commerce Application Backend

This is the backend part of the E-commerce application built using Spring Boot. The backend provides RESTful APIs for user management, product management, and order processing.

## Features

- **User Authentication**: Basic authentication for users, sellers, and admins.
- **User Management**: Registration, login, and role-based access control.
- **Product Management**: APIs for sellers to manage their products.
- **Order Processing**: APIs for managing purchase orders.

## Technologies Used

- **Spring Boot**: Framework for building the backend application.
- **MySQL**: Database for storing user and product information.
- **Maven**: Build tool for managing dependencies and building the application.

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven
- MySQL Database

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd ecommerce-app/backend
   ```

3. Update the `application.properties` file with your MySQL database credentials.

4. Run the application:
   ```
   mvn spring-boot:run
   ```

### Database Setup

Ensure that the MySQL database is running and the schema is initialized using the `schema.sql` file located in `src/main/resources`.

## API Endpoints

- **POST /api/register**: Register a new user.
- **POST /api/login**: Authenticate a user.
- **GET /api/products**: Retrieve all products (for sellers).
- **POST /api/orders**: Create a new purchase order.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.