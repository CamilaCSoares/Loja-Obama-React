import loja from './img/loja.jpg';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import './App.css';
import React from 'react';

class Main extends React.Component{
    render () {
        return (
    
            <main className='principal'>

                <article className='sobre'>
            
                    <h2>Sobre Nós</h2>
                    <img src={loja}
                        alt='imagem de uma loja de informática com três pessoas sendo dois homem e uma mulher, ela é loira, está sorridente e vestida com uma camisa social branca e a parte de baixo cinca, um dos homens que está com seu braço nos ombros da moça possui o cabelo curto e preto e camisa social azul, o outro rapaz cabelos castanhos e camisa social branca.'/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut beatae consectetur quisquam mollitia sint
                        facere recusandae deleniti! Quis libero necessitatibus, eveniet, facere minima voluptatibus aliquam
                        omnis quidem, sunt fuga odit?</p>
                    <p>Aperiam suscipit blanditiis, sint commodi consectetur ratione non provident deserunt dolor at tenetur eum
                        officiis nobis perspiciatis, fugiat explicabo ipsam totam nemo! Enim, nostrum. Quisquam minima tempora
                        architecto sint aut!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime quis voluptatibus maiores quam
                        laudantium esse minus similique ad temporibus totam iure ipsum aliquid expedita, a velit neque quidem
                        enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam architecto sed qui rerum
                        soluta quaerat assumenda modi ipsa! Vel, exercitationem corrupti. Recusandae dignissimos qui nemo nobis,
                        corrupti impedit sit.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla a ipsa saepe, architecto doloribus
                        facere, pariatur officiis hic expedita odit quos aliquid ad. Iste doloribus est rem, sint vero quaerat.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam accusantium quibusdam aperiam facilis,
                        nam dolore magnam ea. Iure expedita dolorem alias sit atque autem sequi, officia pariatur numquam
                        ratione hic.</p>
            
                </article>
            
                <aside className='onde-estamos'>
            
                    <h2>Onde Estamos</h2>
                    <p>R. Tito, 54 - Vila Romana, São Paulo - SP, Brasil, 05051-000</p>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.124281985711!2d-46.693997385384776!3d-23.528031966246633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1647265840799!5m2!1spt-BR!2sbr'></iframe>
                    <h2>Contatos</h2>
            
                    <ul>
                        <li> <FaPhoneAlt/> : (11) 95123-0666</li>
                        <li> <FaWhatsapp/> : (11) 95123-0666</li>
                        <li> <FaEnvelope/> : camilacarlasoaress@gmail.com</li>
                    </ul>
            
                </aside>
            
            </main>
        
        );
    }
}

export default Main; 