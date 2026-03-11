import './skills.css'
import ConstellationCanvas from '../../components/constellation'
import { usePageAnimation } from '../../hooks/usePageAnimation'

function Skills(){
  const isVisible = usePageAnimation()
  return(
    <>
    <div className="skillsCon">
      <h6 className={`skills transition-all duration-1000 ${isVisible ? '-translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>Мои навыки в програмировании</h6>

      <section className={`constellation-container transition-all duration-1000 ${isVisible ? '-translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`} id="constellation">
        <ConstellationCanvas />
      </section>

      <section className='my-20'>
        <h2 className='skillsText'>Стек моих навыков и изученных языков и библиотек</h2>
        <h4 className='skillsPreText'>Здесь собрано все, что я изучал за свой путь программирования и насколько я изучил это.</h4>
        <div className='skillsTable'>
          
          <div className='skillFracSection'>
            <h3 className='skillFrac text-sky-300'>Frontend</h3>
            <table className='skillFracT'>
              <tbody>
                <tr id="skill-js" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>JavaScript</div></td>
                  <td className='font-bold text-green-400 text-xl'>Замечательно</td>
                </tr>
                <tr id="skill-react" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>React</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средне</td>                
                </tr>
                <tr id="skill-next" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>Next.js</div></td>
                  <td className='font-bold text-red-400 text-xl'>Немного</td>
                </tr>
                <tr id="skill-css" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>CSS</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средне</td>
                </tr>
                <tr id="skill-twcss" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>Tailwind CSS</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средне</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='skillFracSection'>
            <h3 className='skillFrac text-green-500'>Backend</h3>
            <table className='skillFracT'>
              <tbody>
                <tr id="skill-node" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>Node.js</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средне</td>
                </tr>
                <tr id="skill-python" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>Python</div></td>
                  <td className='font-bold text-green-400 text-xl'>Замечательно</td>
                </tr>
                <tr id="skill-sql" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>PostgreSQL</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средне</td>
                </tr>
                <tr id="skill-ts" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>Typescript / Javascript</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средне</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className='skillFracSection'>
            <h3 className='skillFrac text-fuchsia-300'>Game Dev</h3>
            <table className='skillFracT'>
              <tbody>
                <tr id="skill-unity" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>Unity / C#</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средне</td>
                </tr>
                <tr id="skill-unreal" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>Unreal Engine / C++</div></td>
                  <td className='font-bold text-red-400 text-xl'>Немного</td>
                </tr>
                <tr id="skill-java-g" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>Java</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средне</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='skillFracSection'>
            <h3 className='skillFrac text-amber-500'>Мобильная разработка</h3>
            <table className='skillFracT'>
              <tbody>
                <tr id="skill-java-m" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>Java</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средне</td>
                </tr>
                <tr id="skill-kotlin" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>Kotlin</div></td>
                  <td className='font-bold text-red-400 text-xl'>Немного</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='skillFracSection'>
            <h3 className='skillFrac text-red-400'>Другое</h3>
            <table className='skillFracT'>
              <tbody>
                <tr id="skill-cpp" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>C++</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средне</td>
                </tr>
                <tr id="skill-git" className='skillDesc'>
                  <td className='w-1/2'>{/*<img src="" alt="" />*/}<div className='skill'>Git / CI/CD</div></td>
                  <td className='font-bold text-yellow-400 text-xl'>Средне</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </div>
    </>
  )
}
export default Skills