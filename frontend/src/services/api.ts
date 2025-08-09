import axios from 'axios';
import { Product } from '../types';

const API_URL = '/api';

// Function to register a new user
export const registerUser = async (userData: { username: string; password: string; role: string }) => {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
};

// Function to login a user
export const loginUser = async (credentials: { username: string; password: string }) => {
    const response = await axios.post('/api/login', credentials);
    return response.data;
};

export const fetchUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

// Function to fetch all products
export const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

// Function to fetch a single product by ID
export const fetchProductById = async (productId: number) => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
};

// Function to create a new product (admin only)
export const createProduct = async (productData: Product) => {
    const response = await axios.post(`${API_URL}/products`, productData);
    return response.data;
};

// Function to update a product (admin only)
export const updateProduct = async (productId: number, productData: Product) => {
    const response = await axios.put(`${API_URL}/products/${productId}`, productData);
    return response.data;
};

// Function to delete a product (admin only)
export const deleteProduct = async (productId: number) => {
    const response = await axios.delete(`${API_URL}/products/${productId}`);
    return response.data;
};

// Function to create a purchase order
export const createOrder = async (orderData: any) => {
    const response = await axios.post(`${API_URL}/orders`, orderData);
    return response.data;
};

// Function to fetch user account details
export const fetchUserAccount = async (userId: number) => {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
};

export const fetchUserOrders = async (userId: number) => {
    const response = await axios.get(`/api/users/${userId}/orders`);
    return response.data;
};