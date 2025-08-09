import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import SellerDashboard from './pages/SellerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';

const App: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: '', password: '', role: 'CUSTOMER' });

  useEffect(() => {
    axios.get('/api/users')
      .then(res => setUsers(res.data))
      .catch(() => setUsers([]));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('/api/users/register', form)
      .then(() => window.location.reload())
      .catch(() => alert('Registration failed'));
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/seller" component={SellerDashboard} />
        <Route path="/customer" component={CustomerDashboard} />
      </Switch>

      <div className="container mt-5">
        <h2>User Registration</h2>
        <form onSubmit={handleRegister} className="mb-4">
          <input
            className="form-control mb-2"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-2"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <select
            className="form-control mb-2"
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="CUSTOMER">Customer</option>
            <option value="SELLER">Seller</option>
            <option value="ADMIN">Admin</option>
            <option value="DELEGATE_ADMIN">Delegate Admin</option>
          </select>
          <button className="btn btn-primary" type="submit">Register</button>
        </form>

        <h2>Users</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th><th>Username</th><th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u: any) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Router>
  );
};

export default App;