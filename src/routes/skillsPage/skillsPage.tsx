import './skills.css'
import ConstellationCanvas from '../../components/constellation'

function Skills(){
  return(
    <>
      <header>
        <h6 className='text-5xl font-bold my-10 text-left'>Мои навыки в програмировании</h6>
      </header>

      <section className="constellation-container" id="constellation">
          <ConstellationCanvas />
      </section>

      <section className='my-20'>
        <h2 className='text-left text-3xl my-10 font-medium'>
          Стек моих навыков и изученных языков и библиотек
        </h2>

        <div className='gap-10 grid grid-cols-2'>
          
          {/* Карточка Frontend */}
          <div className='bg-white/5 p-6 rounded-2xl'>
            <h3 className='font-medium text-sky-300 text-4xl mb-5'>Frontend</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {/* ID совпадает с id в SKILLS_DATA */}
                <tr id="skill-js" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td className='w-1/2'><img src="" alt="" /><div className='font-medium p-2.5 text-2xl'>JavaScript</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
                <tr id="skill-react" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td className='w-1/2'><img src="" alt="" /><div className='font-medium p-2.5 text-2xl'>React</div></td>
                  <td style={{ textAlign: 'right' }}></td>
                </tr>
                <tr id="skill-css" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td className='w-1/2'><img src="" alt="" /><div className='font-medium p-2.5 text-2xl'>CSS</div></td>
                  <td style={{ textAlign: 'right' }}></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Карточка Backend */}
          <div className='bg-white/5 p-6 rounded-2xl'>
            <h3 style={{ color: '#339933', marginBottom: '1rem' }}>Backend</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr id="skill-node" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>Node.js</td>
                  <td style={{ textAlign: 'right' }}></td>
                </tr>
                <tr id="skill-python" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>Python</td>
                  <td style={{ textAlign: 'right' }}></td>
                </tr>
                <tr id="skill-sql" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>PostgreSQL</td>
                  <td style={{ textAlign: 'right' }}></td>
                </tr>
                <tr id="skill-go" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>Go</td>
                  <td style={{ textAlign: 'right' }}></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Карточка DevOps */}
          <div className='bg-white/5 p-6 rounded-2xl'>
            <h3 style={{ color: '#f05032', marginBottom: '1rem' }}>DevOps</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr id="skill-docker" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>Docker</td>
                  <td style={{ textAlign: 'right' }}></td>
                </tr>
                <tr id="skill-git" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '10px' }}>Git / CI/CD</td>
                  <td style={{ textAlign: 'right' }}></td>
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