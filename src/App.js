import React from "react";
import './scss/style.scss';
import Home from "./pages/Home";
import { Router, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout'
import LayoutAdditional from './layouts/LayoutAdditional'
import Film from './pages/Film'
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import Serial from './pages/Serial'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="films" element={<Film />} />
          <Route path="film/:id" element={<Film />} />
          <Route path="serial/:id" element={<Serial />} />
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
