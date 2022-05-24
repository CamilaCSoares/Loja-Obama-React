import {FaTwitter} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa'
import './App.css';
import React from 'react';

class Menu extends React.Component{
    render() {
        return (
    
            <nav className='menu'>

                <ul>
                
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#produtos'>Produtos</a></li>
                    <li><a href='#servicos'>Serviços</a></li>
                    <li><a href='#contatos'>Contatos</a></li>
                
                </ul>
                
                <div className='social-icons'>
                
                    <a id="Facebook"> <FaFacebookF color='#fff'/> </a>
                    <a id="Twitter"> <FaTwitter color='#fff'/> </a>
                    <a id="Google"> <FaGoogle color='#fff'/> </a>
                
                </div>
                
            </nav>
        
        );
    }
}

export default Menu;