
import { useState, useEffect, type ReactElement } from 'react'
import { contactsApi, type Contact } from '../services/api'

const contactIcons: Record<string, ReactElement> = {
    email: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    github: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-2.096 1.029-2.833-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.737 1.028 1.74 1.028 2.833 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
    ),
    telegram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
    ),
    phone: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    ),
    linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    ),
    other: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
    )
}

const contactLabels: Record<string, string> = {
    email: 'Email',
    github: 'GitHub',
    telegram: 'Telegram',
    phone: 'Телефон',
    linkedin: 'LinkedIn',
    other: 'Контакт'
}

function Footer(){
    const [contacts, setContacts] = useState<Contact[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        contactsApi.getAll()
            .then(data => {
                setContacts(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return (
        <>
        {/* Секция контактов */}
        <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Мои контакты
            </h2>
            <p className="text-purple-200/80 mb-8 text-lg">
                Открыт для предложений и сотрудничества. Напишите мне!
            </p>
            {loading ? (
                <div className="flex justify-center items-center gap-2">
                    <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-purple-200">Загрузка контактов...</span>
                </div>
            ) : error ? (
                <p className="text-red-400 mb-4">{error}</p>
            ) : (
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {contacts.map(contact => (
                        <a
                            key={contact.id}
                            href={contact.type === 'email' ? `mailto:${contact.value}` : contact.value}
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            {contactIcons[contact.type] || contactIcons.other}
                            {contact.type === 'email' ? contact.value : contactLabels[contact.type]}
                        </a>
                    ))}
                </div>
            )}
            <p className="text-purple-200/50 text-sm">
                © 2026 Все права защищены
            </p>
            </div>
        </div>
        </section>
        </>
    )
}
export default Footer