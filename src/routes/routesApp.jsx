import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";

import Home from "../pages/Home.jsx";
import Dama from "../pages/Dama.jsx";
import Caballero from "../pages/Caballero.jsx";
import Marca from "../pages/Marca.jsx";
import Nuevo from "../pages/Nuevo.jsx";
import Ofertas from "../pages/Ofertas.jsx";
import Basico from "../pages/Basico.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

export default function routesApp() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dama" element={<Dama />} />
                <Route path="/caballero" element={<Caballero />} />
                <Route path="/marca" element={<Marca />} />
                <Route path="/nuevo" element={<Nuevo />} />
                <Route path="/ofertas" element={<Ofertas />} />
                <Route path="/basico" element={<Basico />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}
