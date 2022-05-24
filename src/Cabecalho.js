import {ImSearch} from 'react-icons/im';
import './App.css';
import React from 'react';

class Cabecalho extends React.Component{
    render(){

        return(

            <header className='cabecalho'>

            <h1 className='logo'>
                <a href='index.html' title='Loja de informática do Obama'> Loja de Informática do Obama
                </a>
            </h1>
            <form method='post'>
            <input type='text' name='busca' id='busca' placeholder='faça uma busca aqui'/>
            <button className='buttonSearch'>
                <ImSearch size={18} color='#fff'/>
            </button>
            </form>

            </header>
            
            
        );
    }
}


export default Cabecalho;
