import React, { useState } from 'react';
import '../styles/CarruselFits.css';

import palazo from '../img_Carrusel_Fits/palazo.png';
import oficinaCasual from '../img_Carrusel_Fits/oficina casual3.jpg';
import pantalonAncho from '../img_Carrusel_Fits/Pantalón ancho.jpeg'; 
import polerabasica from '../img_Carrusel_Fits/polera basica.jpg';
import oficinaCasual2 from '../img_Carrusel_Fits/oficina casual2.jpg';
import oficinaCasual3 from '../img_Carrusel_Fits/oficina casual1.jpg';

const CarruselFits = () => {
  const slides = [
    {
      titulo: "Palazzo",
      subtitulo: "NUEVOS FITS",
      descripcion: "Alargan y estilizan visualmente nuestra figura. De pierna ancha desde la cadera hasta el final.",
      imagen: "../img_Carrusel_Fits/palazo.png",
      marcaAgua: "palazo",
      precio: 120
    },
    {
      titulo: "Oficina Casual",
      subtitulo: "NUEVOS FITS",
      descripcion: "Pantalón ajustado que realza la figura. Perfecto para un look moderno y casual.",
      imagen: "../img_Carrusel_Fits/oficina casual3.jpg",
      marcaAgua: "skinny",
      precio: 90
    },
    {
      titulo: "Pantalón Ancho",
      subtitulo: "NUEVOS FITS",
      descripcion: "Comodidad y estilo en un solo diseño, con pierna amplia desde la cintura.",
      imagen: "../img_Carrusel_Fits/Pantalón ancho1.jpeg",
      marcaAgua: "wide leg",
      precio: 100
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="nuevo-fit-carrusel">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="nuevo-fit-texto">
              <h3 className="subtitulo">{slide.subtitulo}</h3>
              <h1 className="titulo">{slide.titulo}</h1>
              <p className="descripcion">{slide.descripcion}</p>
              <a
                href="#"
                className="boton-comprar"
                data-nombre={slide.titulo}
                data-precio={slide.precio}
              >
                COMPRA AQUÍ
              </a>
            </div>
            <div className="nuevo-fit-imagen">
              <img src={slide.imagen} alt={slide.titulo} />
              <span className="marca-agua">{slide.marcaAgua}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="prev" onClick={prevSlide}>Prev</button>
      <button className="next" onClick={nextSlide}>Next</button>
    </section>
  );
};

export default CarruselFits;
