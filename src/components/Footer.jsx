import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-marcas">
                <img src="/img/marca1.png" alt="Marca 1" />
                <img src="/img/marca2.png" alt="Marca 2" />
                <span>BrandX</span>
                <img src="/img/marca3.png" alt="Marca 3" />
            </div>

            <div className="footer-info">
                <div>
                    <h4>Nosotros</h4>
                    <p>Quiénes somos</p>
                    <p>Nuestra historia</p>
                </div>
                <div>
                    <h4>Ayuda</h4>
                    <p>Preguntas frecuentes</p>
                    <p>Soporte</p>
                </div>
                <div>
                    <h4>Métodos de pago</h4>
                    <div className="payment-icons">
                        <img src="/img/visa.png" alt="Visa" />
                        <img src="/img/mastercard.png" alt="MasterCard" />
                        <img src="/img/paypal.png" alt="PayPal" />
                    </div>
                </div>
            </div>

            <div className="footer-redes">
                <a href="https://facebook.com">
                    <img src="/img/facebook.png" alt="Facebook" />
                </a>
                <a href="https://instagram.com">
                    <img src="/img/instagram.png" alt="Instagram" />
                </a>
                <a href="https://twitter.com">
                    <img src="/img/twitter.png" alt="Twitter" />
                </a>
            </div>

            <div className="footer-copy">
                © {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.
            </div>

            <div className="footer-brand">MI TIENDA</div>
        </footer>
    );
};

export default Footer; 