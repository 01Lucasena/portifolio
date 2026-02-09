import './projetos.css'
import { FaHtml5, FaReact, FaCss3, FaJs, } from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import portifolioImg from '../../assets/portifolio.png'
import calculadoraImg from '../../assets/ecotrip.png'
import guardioesImg from '../../assets/guardioes.png'


function Projetos({ id }){;
    
    return(
        <div className='projetos' id={id}>
            <h1 className='projetos-title'><div className='arrow-bg'><FaArrowRight className='arrow-icon' /></div>Projetos Recentes</h1>
            <div className='projetos-container'>
                <div className='projeto-card'>
                    <img className='projeto-img' src={portifolioImg}/>
                    <h2 className='projeto-title'>Portifólio</h2>
                    <p className='projeto-description'>Aplicação single-page desenvolvida para apresentar minha trajetória, habilidades e projetos com foco em microinterações, acessibilidade e narrativa visual.</p>
                    <div className='projeto-tags'>
                        <span className='projeto-tag'><FaReact /></span>
                        <span className='projeto-tag'><FaCss3 /></span>
                        <span className='projeto-tag'><FaHtml5 /></span>
                        <span className='projeto-tag'><FaJs /></span>
                    </div>
                    
                    <div className='card-btns'>
                        <button onClick={() => window.open("https://github.com/01Lucasena/portifolio", "_blank")} className='projeto-link-github'><FaGithub/></button>
                        <button onClick={() => window.open("https://lucasenaportifolio.netlify.app/", "_blank")} className='projeto-link'><FaArrowRight className='arrow-card'/></button>
                    </div>
                </div>

                <div className='projeto-card'>
                    <img className='projeto-img' src={calculadoraImg}/>
                    <h2 className='projeto-title'>Calculadora Eco Trip</h2>
                    <p className='projeto-description'>Projeto desenvolvido durante o bootcamp Copilot na Prática em parceria com a DIO. A calculadora realiza o cálculo da pegada de carbono de suas viagens.</p>
                    <div className='projeto-tags'>
                        <span className='projeto-tag'><FaCss3 /></span>
                        <span className='projeto-tag'><FaHtml5 /></span>
                        <span className='projeto-tag'><FaJs /></span>
                    </div>
                    
                    <div className='card-btns'>
                        <button onClick={() => window.open("https://github.com/01Lucasena/calculadora-co2", "_blank")} className='projeto-link-github'><FaGithub/></button>
                        <button onClick={() => window.open("https://01lucasena.github.io/calculadora-co2/", "_blank")} className='projeto-link'><FaArrowRight className='arrow-card'/></button>
                    </div>
                </div>

                <div className='projeto-card'>
                    <img className='projeto-img' src={guardioesImg}/>
                    <h2 className='projeto-title'>Guardiões da Segurança</h2>
                    <p className='projeto-description'>Guardiões da Segurança é um jogo de treinamento em Segurança do Trabalho, desenvolvido para rodar diretamente no navegador. Projeto TCC do SENAI</p>
                    <div className='projeto-tags'>
                        <span className='projeto-tag'><FaCss3 /></span>
                        <span className='projeto-tag'><FaHtml5 /></span>
                        <span className='projeto-tag'><FaJs /></span>
                    </div>
                    
                    <div className='card-btns'>
                        <button onClick={() => window.open("https://github.com/felipesantos71/guardioes-projeto", "_blank")} className='projeto-link-github'><FaGithub/></button>
                      
                    </div>
                </div>
                
            </div>
        </div>  
    )
}   

export default Projetos