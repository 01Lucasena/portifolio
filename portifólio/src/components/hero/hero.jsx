import './hero.css'
import { HiChevronDown } from "react-icons/hi2";
import { FaGithub, FaDownload } from "react-icons/fa";


function Hero({ id }){
    const downloadCV = () => {
        window.open('/Lucas Sena - CV.pdf', '_blank')
    }

    const openGithub = () => {
        window.open('https://github.com/01Lucasena', '_blank')
    }

    return(
        <div className='hero' id={id}>
            <h2 className='boas-vindas'>Olá, eu sou</h2>
            <h1 className='nome'>LUCAS SENA</h1>
            <p className='descricao'>Transformo ideias em experiências digitais incríveis com foco em design responsivo, <br /> performance e acessibilidade.</p>
            <div className='hero-btns'>
                <div className='primary-btn' onClick={downloadCV}><FaDownload /> Baixar CV</div>
                <div className='secondary-btn' onClick={openGithub}><FaGithub /> 01Lucasena</div>
            </div>

            <div className='hero-arrow'>
                <HiChevronDown size={32}/>
            </div>
        </div>
    )
}

export default Hero