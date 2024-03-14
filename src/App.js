// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Product from './Components/Product';
import Order from './Components/Order';
import './App.css';

function App() {
  return (
    <Router>
      <div>

        <nav className="navbar">
          <ul className="nav-list">
          <li className="nav-item">
              <Link to="https://careers.entnt.in/role/a4821cd6-cd96-41c4-b650-bd1a30191ec8" className="nav-link">Entnt Front End Assignment</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link">Orders</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;