import './home.css'

function Home(){
  return (
    <>
      <div className="container">
        <section className="hero">
            <h1>Привет, я <br/><span>Программист</span></h1>
            <p>Создаю эстетичные и функциональные интерфейсы. Специализируюсь на фронтенд-разработке и UI/UX дизайне.</p>
            <a href="здесь пролистнуть к контактам" className="btn">Связаться со мной</a>Еще кнопка
            Ссылка вниз
            тут картинка
        </section>

        <section className='info'>
          опыт работы, тп
        </section>

        <section id="projects">
            <h2 className="section-title">Мои работы</h2>
            <div className="grid">
                <div className="card">
                    <h3>Проект Alpha</h3>
                    <p>Лендинг для крипто-стартапа с использованием React и Three.js. Анимации, темная тема и интерактивные графики.</p>
                </div>
                <div className="card">
                    <h3>Приложение Beta</h3>
                    <p>Мобильное приложение для трекинга привычек. Дизайн в стиле Glassmorphism, Firebase бэкенд.</p>
                </div>
                <div className="card">
                    <h3>Платформа Gamma</h3>
                    <p>E-commerce магазин одежды. Интеграция с платежной системой, админ-панель и кастомный UI кит.</p>
                </div>
            </div>
        </section>

        <section id="about">
            <h2 className="section-title">Навыки</h2>
            <div className="grid">
                <div className="card">
                    <h3>Frontend</h3>
                    <p>HTML5, CSS3, JavaScript, React, Vue.js, Tailwind CSS, SASS.</p>
                </div>
                <div className="card">
                    <h3>Game Dev</h3>
                    <p>Unity, C#, Unreal Engine, C++, </p>
                </div>
                <div className="card">
                    <h3>Tools</h3>
                    <p>Git, Webpack, Vite, VS Code, Linux.</p>
                </div>
            </div>
        </section>
        Мои контакты
        <footer id="contact">
            <p>© 2023 Все права защищены. <br/> Напиши мне: hello@portfolio.com</p>
        </footer>
      </div>
    </>
  )
}
export default Home