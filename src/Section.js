import './App.css';
import React from 'react';

class Section extends React.Component{
    render() {
        return (

            <section className='newsletter'>

                <h3>Newsletter</h3>
                <p>Receba nossas informações por e-mail.</p>

                <form fmethod='post'>
                    <input type='text' placeholder='Digite seu nome'/>
                    <input type='email' placeholder='Digite seu email'/>
                    <button>Cadastrar</button>
                </form>

            </section>

        );
    }
}

export default Section;

