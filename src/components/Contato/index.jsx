import React, { useState } from 'react';
import './contato.css';
import Button from '../Button';

export default function Contato() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // A lógica de envio do formulário será inserida aqui
        alert('Formulário enviado com sucesso!');
    };

    return (
        <div className="contact-container">
            <h2>Entre em <span>Contato</span> Conosco</h2>

            <div className="contact-options">
                {/* Link para WhatsApp */}
                <a
                    href="https://wa.me/5591999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                WhatsApp
                </a>
            </div>

            Formulário de Contato
            {/* Formulário de Contato */}
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Nome:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>

                <label>
                    E-mail:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>

                <label>
                    Mensagem:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>

                <Button type="submit" className="btn-default">Enviar Mensagem</Button>
            </form>

            {/* Link para E-mail */}
            ou nos envie um E-mail para contato@lavanderia.com.br
        </div>
    );
}
