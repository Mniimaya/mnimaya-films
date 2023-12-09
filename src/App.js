import React from "react";
import './scss/style.scss';
import Home from "./pages/Home";
import { Router, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout'
import LayoutAdditional from './layouts/LayoutAdditional'
import Films from './pages/Films'
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
        </Route>
        <Route path="/" element={<LayoutAdditional />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
