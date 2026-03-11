import './header.css'
import { Link } from 'react-router-dom'

function Header(){
  return(
    <>
    <header>
      <div className="header-container">
        <Link to='/' className='header-title'><p>Мое Портфолио</p></Link>
        <div className="header-links">
          <Link to='/' className="header-link group"><div className='relative'>Главная
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span></div></Link>
          <Link to='/skills' className="header-link group"><div className='relative'>Скиллы
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span></div></Link>
          <Link to='/projects' className="header-link group"><div className='relative'>Проекты
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span></div></Link>
          <Link to='/achievements' className="header-link group"><div className='relative'>Достижения
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span></div></Link>
        </div>
        <div/>
      </div>
    </header>
    </>
  )
}
export default Header