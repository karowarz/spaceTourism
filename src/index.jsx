import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Destination from './Destination';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/destination" element={<Destination />}></Route>
    </Routes>
  </BrowserRouter>
);
