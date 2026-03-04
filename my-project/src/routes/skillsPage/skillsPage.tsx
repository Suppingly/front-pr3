import './skills.css'
import ConstellationCanvas from '../../components/constellation'

function Skills(){
  return(
    <>
      <header>
        <h1>Иван Иванов</h1>
          <p className="subtitle">Full-Stack Разработчик | Архитектор ПО</p>
      </header>

      <section className="constellation-container" id="constellation">
          <div className="overlay-text">
              <h2>Карта Навыков</h2>
              <p>Наведите курсор, чтобы увидеть связи</p>
          </div>
          <ConstellationCanvas />
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '2rem', borderLeft: '4px solid #00d4ff', paddingLeft: '1rem' }}>
          Детальный Стек
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Карточка Frontend */}
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#61dafb', marginBottom: '1rem' }}>Frontend</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {/* ID совпадает с id в SKILLS_DATA */}
                <tr id="skill-js" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>JavaScript</td>
                  <td style={{ textAlign: 'right' }}>95%</td>
                </tr>
                <tr id="skill-react" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>React</td>
                  <td style={{ textAlign: 'right' }}>90%</td>
                </tr>
                <tr id="skill-css" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>CSS / SCSS</td>
                  <td style={{ textAlign: 'right' }}>98%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Карточка Backend */}
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#339933', marginBottom: '1rem' }}>Backend</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr id="skill-node" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>Node.js</td>
                  <td style={{ textAlign: 'right' }}>85%</td>
                </tr>
                <tr id="skill-python" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>Python</td>
                  <td style={{ textAlign: 'right' }}>80%</td>
                </tr>
                <tr id="skill-sql" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>PostgreSQL</td>
                  <td style={{ textAlign: 'right' }}>88%</td>
                </tr>
                <tr id="skill-go" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>Go</td>
                  <td style={{ textAlign: 'right' }}>60%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Карточка DevOps */}
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#f05032', marginBottom: '1rem' }}>DevOps</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr id="skill-docker" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>Docker</td>
                  <td style={{ textAlign: 'right' }}>75%</td>
                </tr>
                <tr id="skill-git" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>Git / CI/CD</td>
                  <td style={{ textAlign: 'right' }}>92%</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      <footer>
          <p>&copy; 2023 Иван Иванов. Все права защищены.</p>
      </footer>
    </>
  )
}
export default Skills