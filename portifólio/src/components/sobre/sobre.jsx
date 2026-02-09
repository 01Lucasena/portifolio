import './sobre.css'
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGit} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa'

function Sobre({ id }){
    return(
        <div className='sobre' id={id}>
            <h1 className='sobre-title'><div className='arrow-bg'><FaArrowRight className='arrow-icon' /></div> Sobre</h1>
            <p className='sobre-text'>
                Olá! Meu nome é Lucas Sena e sou desenvolvedor web full-stack.
            </p>
            <p className='sobre-text'>
                Minha trajetória começou com curiosidade pelas interfaces que usava no dia a dia. A partir daí, mergulhei em cursos especializados, comunidades de tecnologia e projetos próprios para experimentar diferentes abordagens de UI.
            </p>
            <p className='sobre-text'>
                Hoje, aplico princípios de usabilidade, tipografia e storytelling visual para construir experiências consistentes e encantadoras.
            </p>
            <p className='sobre-text'>
                Além de codificar, me dedico a entender o usuário final, prototipar fluxos e iterar com base em feedbacks. Acredito que um bom produto nasce do equilíbrio entre tecnologia e empatia, por isso mantenho uma postura colaborativa e aberta a novas perspectivas em cada projeto.
            </p>

            <div className='skills'>
                <h2 className='skills-title'><div className='arrow-bg'><FaArrowRight className='arrow-icon' /></div>Habilidades</h2>
                <div className='skills-icons'>
                <FaHtml5 className='skill-icon' />
                <FaCss3 className='skill-icon' />
                <FaJs className='skill-icon' />
                <FaReact className='skill-icon' />
                <FaNodeJs className='skill-icon' />
                <FaPython className='skill-icon' />
                <FaJava className='skill-icon' />
                <FaGit className='skill-icon' />
                </div>
            </div>

            

        </div>
    )
}

export default Sobre;