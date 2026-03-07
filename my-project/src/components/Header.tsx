import './header.css'
import { Link } from 'react-router-dom'

function Header(){
  return(
    <>
    <header>
      <div className="header-container">
        <Link to='/' className='header-title'>Мое Портфолио</Link>
        <div className="header-links">
          <Link to='/' className="header-link">Главная</Link>
          <Link to='/skills' className="header-link">Скиллы</Link>
          <Link to='/projects' className="header-link">Проекты</Link>
          <Link to='/' className="header-link">Активности</Link>
        </div>
        <div/>
      </div>
    </header>
    </>
  )
}
export default Header