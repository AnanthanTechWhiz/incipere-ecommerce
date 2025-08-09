export interface User {
    id: number;
    username: string;
    password: string;
    role: 'ADMIN' | 'SELLER' | 'CUSTOMER';
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    sellerId: number;
}

export interface Order {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    orderDate: string;
    status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
}