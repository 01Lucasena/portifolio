import './nav.css'
import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const scrollToSection = (sectionId) => {
        console.log('Tentando rolar para:', sectionId)
        const element = document.getElementById(sectionId)
        console.log('Elemento encontrado:', element)
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            console.log('Scroll executado com sucesso')
            setActiveSection(sectionId)
        } else {
            console.error('Elemento não encontrado:', sectionId)
            // Tentar scroll manual se getElementById não funcionar
            const selector = `[id="${sectionId}"]`
            const fallbackElement = document.querySelector(selector)
            if (fallbackElement) {
                fallbackElement.scrollIntoView({ behavior: 'smooth' })
                console.log('Fallback scroll executado')
                setActiveSection(sectionId)
            }
        }
        // Fechar menu mobile após clicar
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const sections = ['hero', 'sobre', 'projetos', 'contato']
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -50% 0px',
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Section visible:', entry.target.id)
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        
        // Aguardar um pouco para garantir que os elementos existam
        const timeoutId = setTimeout(() => {
            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId)
                if (element) {
                    console.log('Observing element:', sectionId)
                    observer.observe(element)
                } else {
                    console.log('Element not found for observation:', sectionId)
                }
            })
        }, 100)

        return () => {
            clearTimeout(timeoutId)
            observer.disconnect()
        }
    }, [])

    return(
        <header className="nav">
            <div className='navbar'>
                {/* Menu Hambúrguer - visível apenas em mobile */}
                <button className="hamburger-btn" onClick={toggleMenu}>
                    <FaBars />
                </button>

                {/* Menu Desktop - visível apenas em desktop */}
                <div className='nav-btns desktop-menu'>
                    <button className={`nav-btn ${activeSection === 'hero' ? 'active' : ''}`} onClick={() => scrollToSection('hero')}>Início</button>
                    <button className={`nav-btn ${activeSection === 'sobre' ? 'active' : ''}`} onClick={() => scrollToSection('sobre')}>Sobre</button>
                    <button className={`nav-btn ${activeSection === 'projetos' ? 'active' : ''}`} onClick={() => scrollToSection('projetos')}>Projetos</button>
                    <button className={`nav-btn ${activeSection === 'contato' ? 'active' : ''}`} onClick={() => scrollToSection('contato')}>Contato</button>
                </div>

                {/* Menu Mobile - aparece quando clicado */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <button className={`nav-btn ${activeSection === 'hero' ? 'active' : ''}`} onClick={() => scrollToSection('hero')}>Início</button>
                    <button className={`nav-btn ${activeSection === 'sobre' ? 'active' : ''}`} onClick={() => scrollToSection('sobre')}>Sobre</button>
                    <button className={`nav-btn ${activeSection === 'projetos' ? 'active' : ''}`} onClick={() => scrollToSection('projetos')}>Projetos</button>
                    <button className={`nav-btn ${activeSection === 'contato' ? 'active' : ''}`} onClick={() => scrollToSection('contato')}>Contato</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar