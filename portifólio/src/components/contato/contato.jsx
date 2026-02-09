import './contato.css'
import { FaArrowRight, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contato({ id }){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const sendEmail = (e) => {
        e.preventDefault()
        
        // Validação básica
        if (!formData.name || !formData.email || !formData.message) {
            alert('Por favor, preencha todos os campos.')
            return
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            alert('Por favor, insira um email válido.')
            return
        }
        
        console.log('Enviando email:', formData)
        
        // Parâmetros para EmailJS (nomes padrão)
        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        }
        
        emailjs.send(
            'service_2qif5wp', // Service ID
            'template_oj4hu8i', // Template ID
            templateParams,
            'ePSfBjT5-7hROUQpX' // Public Key
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text)
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.')
            setFormData({ name: '', email: '', message: '' })
        })
        .catch((err) => {
            console.error('FAILED...', err)
            
            // Tratamento específico para erros comuns
            if (err.text === 'The user ID is required') {
                alert('Erro de configuração: User ID não encontrado. Verifique as credenciais do EmailJS.')
            } else if (err.text === 'The service ID is required') {
                alert('Erro de configuração: Service ID não encontrado. Verifique as credenciais do EmailJS.')
            } else if (err.text === 'The template ID is required') {
                alert('Erro de configuração: Template ID não encontrado. Verifique as credenciais do EmailJS.')
            } else {
                alert(`Falha ao enviar mensagem: ${err.text || 'Verifique sua conexão e tente novamente.'}`)
            }
        })
    }

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent('Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades.')
        window.open(`https://wa.me/5577988048026?text=${message}`, '_blank')
    }

    return(
        <div className='contato' id={id}>
            <h1 className='projetos-title'><div className='arrow-bg'><FaArrowRight className='arrow-icon' /></div>Contato</h1>

            <div className='titulos-container'>
                <div className='left-contato'>
                    <h1 className='formulario-title'>Envie uma mensagem</h1>
                </div>
                <div className='right-contato'>
                    <h1 className='whatsapp-title'>Entre em contato pelo WhatsApp</h1>
                </div>
            </div>

            <div className='titulos-container'>
                <div className='left-contato'>
                    <form className='formulario-contato' onSubmit={sendEmail}>
                        <p className='formulario-label'>Nome</p>
                        <input 
                            className='input-contato' 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nome" 
                            required 
                        />
                        <p className='formulario-label'>Email</p>
                        <input 
                            className='input-contato' 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email" 
                            required 
                        />
                        <p className='formulario-label'>Mensagem</p>
                        <textarea 
                            className='input-mensagem' 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Mensagem"
                            required
                        ></textarea>
                        <button type="submit" className='btn-enviar'><FaPaperPlane /></button>
                    </form>
                </div>
                
                <div className='right-contato'>
                    <div className='whatsapp-container'>
                        <h1 className='whatsapp-container-title'>Vamos Conversar!</h1>
                        <p className='whatsapp-container-description'>Estou disponível para oportunidades, projetos freelance ou parcerias criativas.<br /> Vamos construir algo memorável juntos.</p>
                        <button className='whatsapp-container-btn' onClick={handleWhatsAppClick}>
                            <FaWhatsapp className='whats-icon' />Falar via WhatsApp
                        </button>
                        <p className='whatsapp-container-text'>Tempo médio de resposta: Menos de 1 hora.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato