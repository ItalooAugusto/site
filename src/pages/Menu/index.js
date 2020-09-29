import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Menu() {
return (
    
    <div className="container-home">
     <>
        <ul>    
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="portfolio" >Portfolio</Link>
            </li>
            <li>
                <Link to="contatos" >Contatos</Link>
            </li>
            
        </ul>
        
        
        
        
        
    </>  
    </div>

) 




}