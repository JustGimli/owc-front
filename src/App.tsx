// import { Navigate, Route, Routes } from "react-router-dom";
// import { MainRoots } from "./utils/path";

// function App() {
//     const renderRoutes = () => {
//         return MainRoots.map(({ path, Component }) => (
//             <Route key={path} path={path} element={<Component />} />
//         ));
//     };
//     return (
//         <Routes>
//             {renderRoutes()}
//             <Route path="/error" element={<></>} />
//             <Route path="*" element={<Navigate replace to="/" />} />
//         </Routes>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/HeaderItem';
import ProductPage from './pages/product/ProductPage';
import CardList from './components/CardList/CardList';
import Cart from './pages/CartPages/CartPage';
import { Product } from './utils/interfaces';
import CheckoutPage from './pages/checout/CheckoutPage';

const App = () => {
  const cards: Product[] = [
    { id: 1, title: 'Product 1', price: 100, originalPrice: 150, reviews: 10, imageUrl: 'https://via.placeholder.com/150', condition: 'Excellent', deliveryDate: 'Monday, July 1', orderWithin: '02 Hours 31 Minutes', description: 'Description of the product goes here.' },
    { id: 2, title: 'Product 2', price: 200, originalPrice: 250, reviews: 20, imageUrl: 'https://via.placeholder.com/150', condition: 'Good', deliveryDate: 'Monday, July 1', orderWithin: '02 Hours 31 Minutes', description: 'Description of the product goes here.' },
    // Add more products as needed
  ];

  return (
    <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<CardList cards={cards} />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
  );
};

export default App;
