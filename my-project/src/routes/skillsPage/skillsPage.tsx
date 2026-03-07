import './skills.css'
import ConstellationCanvas from '../../components/constellation'

function Skills(){
  return(
    <>
    <div className="skillsCon">
      <h6 className='skills'>Мои навыки в програмировании</h6>

      <section className="constellation-container" id="constellation">
        <ConstellationCanvas />
      </section>

      <section className='my-20'>
        <h2 className='skillsText'>Стек моих навыков и изученных языков и библиотек</h2>

        <div className='skillsTable'>
          
          <div className='skillFracSection'>
            <h3 className='skillFrac text-sky-300'>Frontend</h3>
            <table className='skillFracT'>
              <tbody>
                <tr id="skill-js" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>JavaScript</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
                <tr id="skill-react" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>React</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>                
                </tr>
                <tr id="skill-next" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>Next.js</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
                <tr id="skill-css" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>CSS</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
                <tr id="skill-twcss" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>Tailwind CSS</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='skillFracSection'>
            <h3 className='skillFrac text-green-500'>Backend</h3>
            <table className='skillFracT'>
              <tbody>
                <tr id="skill-node" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>Node.js</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
                <tr id="skill-python" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>Python</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
                <tr id="skill-sql" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>PostgreSQL</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
                <tr id="skill-ts" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>Typescript / Javascript</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className='skillFracSection'>
            <h3 className='skillFrac text-fuchsia-300'>Game Dev</h3>
            <table className='skillFracT'>
              <tbody>
                <tr id="skill-unity" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>Unity / C#</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
                <tr id="skill-unreal" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>Unreal Engine / C++</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
                <tr id="skill-java-g" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>Java</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='skillFracSection'>
            <h3 className='skillFrac text-amber-500'>Мобильная разработка</h3>
            <table className='skillFracT'>
              <tbody>
                <tr id="skill-java-m" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>Java</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
                <tr id="skill-kotlin" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>Kotlin</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='skillFracSection'>
            <h3 className='skillFrac text-red-600'>Другое</h3>
            <table className='skillFracT'>
              <tbody>
                <tr id="skill-cpp" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>C++</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
                <tr id="skill-git" className='skillDesc'>
                  <td className='w-1/2'><img src="" alt="" /><div className='skill'>Git / CI/CD</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средний</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      <footer>
          <p>&copy; 2023 Иван Иванов. Все права защищены.</p>
      </footer>
    </div>
    </>
  )
}
export default Skills