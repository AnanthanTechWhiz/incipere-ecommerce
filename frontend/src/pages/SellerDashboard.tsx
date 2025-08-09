import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, deleteProduct } from '../services/api';

const SellerDashboard: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = async () => {
        await createProduct(newProduct);
        fetchProducts();
        setNewProduct({ name: '', price: '', stock: '' });
    };

    const handleDeleteProduct = async (id: number) => {
        await deleteProduct(id);
        fetchProducts();
    };

    return (
        <div className="container">
            <h1>Seller Dashboard</h1>
            <div className="mb-3">
                <h2>Add New Product</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    className="form-control"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    className="form-control"
                />
                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={newProduct.stock}
                    onChange={handleInputChange}
                    className="form-control"
                />
                <button onClick={handleAddProduct} className="btn btn-primary mt-2">Add Product</button>
            </div>
            <h2>Existing Products</h2>
            <ul className="list-group">
                {products.map(product => (
                    <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {product.name} - ${product.price} (Stock: {product.stock})
                        <button onClick={() => handleDeleteProduct(product.id)} className="btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SellerDashboard;