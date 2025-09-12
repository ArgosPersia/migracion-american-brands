import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



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
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dama" element={<Dama />} />
                <Route path="/caballero" element={<Caballero />} />
                <Route path="/marca" element={<Marca />} />
                <Route path="/nuevo" element={<Nuevo />} />
                <Route path="/ofertas" element={<Ofertas />} />
                <Route path="/basico" element={<Basico />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
            </Routes>
           
        </Router>
    );
}
