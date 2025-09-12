import React, { useEffect, useState } from "react";
import "../styles/CarruselAutomatico.css";

import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.jpeg";
import foto3 from "../assets/foto3.png";
import foto4 from "../assets/foto4.jpeg";
import ropa1 from "../assets/ropa1.png";

const CarruselAutomatico = () => {
    const imagenes = [foto1, foto2, foto3, foto4, ropa1];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 4100);

        return () => clearInterval(interval);
    }, [imagenes.length]);

    return (
        <div className="carousel">
            <div className="carousel-track">
                {imagenes.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Imagen ${i + 1}`}
                        className={i === index ? "active" : ""}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarruselAutomatico;
