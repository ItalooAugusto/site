import React from 'react';
import './styles.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'


export default function Footer() {
  return (
    <div className="container-footer">
    
    <footer>
    <div className="testando">
        <ul>
        <li><a href=""> Contato</a></li>
        <li><a href=""> Termos de serviço </a></li>
        <li><a href=""> Política de privacidade </a></li>
        <li className="redes-sociais"><FaFacebook size="25" color="blue" /> <FaInstagram size="25" color="fuchsia" /> <FaWhatsapp size="25" color="green" /></li>
        </ul>
    </div>
    </footer>

</div>
  );
}
