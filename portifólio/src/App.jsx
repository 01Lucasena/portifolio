import { useEffect, useRef } from 'react';
import './index.css';
import Navbar from './components/nav/navbar';
import Hero from './components/hero/hero';
import Sobre from './components/sobre/sobre';
import Projetos from './components/projetos/projetos';
import Contato from './components/contato/contato';
import Footer from './components/footer/footer';

function App() {
    
    const introRef = useRef(null);
    const logoSpanRef = useRef(null);

    useEffect(() => {
        
        
        const span = logoSpanRef.current;
        const intro = introRef.current;

       
        const timer1 = setTimeout(() => {
            if (span) span.classList.add('active');
        }, 400);

        
        const timer2 = setTimeout(() => {
            if (span) {
                span.classList.remove('active');
                span.classList.add('fade');
            }
        }, 2000);

        
        const timer3 = setTimeout(() => {
            if (intro) intro.style.top = '-100vh';
        }, 2300);

        
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []); 
    return (
        <>
          <body className='app'>
               <div className="intro" ref={introRef}>
                <h1 className="logo-header">
                    <span className="logo" ref={logoSpanRef}>Lucas Sena</span>
                </h1>
            </div>
                <div className="nav-container">
                    <Navbar/>
                </div>
                <Hero id='hero'/>
                <Sobre id='sobre'/>
                <Projetos id='projetos'/>
                <Contato id='contato'/>
                <Footer/>
          </body>
           
        </>
    );
}

export default App;