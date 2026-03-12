
function Footer(){
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
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                href="mailto:hello@portfolio.com"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@portfolio.com
                </a>
                <a
                href="https://github.com/Suppingly"
                className="px-6 py-3 border-2 border-purple-400/50 rounded-full font-semibold hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 flex items-center gap-2"
                >
                GitHub
                </a>
            </div>
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