import React, { useState } from "react";
import "../styles/CarruselManual.css";

import foto1 from "../assets/1921 international (1).webp";
import foto2 from "../assets/Branco.jpg";
import foto3 from "../assets/BVD.jpg";
import foto4 from "../assets/Fiorucci.jpg";
import ropa1 from "../assets/Fioruccisaco.jpg";

const CarruselManual = () => {
    const imagenes = [foto1, foto2, foto3, foto4, ropa1];
    const [index, setIndex] = useState(0);

    
    const prevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
    };

    
    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    };

    return (
        <div className="carousell-container">
            <button className="prev" onClick={prevImage}>
                ⟨
            </button>
            <div className="carousel-track">
                <img
                    src={imagenes[index]}
                    alt={`Imagen ${index + 1}`}
                    className="active"
                />
            </div>
            <button className="next" onClick={nextImage}>
                ⟩
            </button>
        </div>
    );
};

export default CarruselManual;