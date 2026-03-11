import { useState, useEffect } from "react";
import sword from '../../assets/sword.jpeg'
interface projects{
  name:string;
  img:string;
  desc:string;
  link:string;
}
const projects = [

]

function Projects(){
  const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        setIsVisible(true)
      }, [])
  return (
    <>
    <div className="py-20">
      <h6 className={`text-5xl w-fit h-15 font-bold text-left bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent  transition-all duration-1000 ${isVisible ? '-translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>Мои проекты</h6>
      <div className="text-left text-3xl bg-white/10 w-fit p-5 rounded-full font-medium my-10">Game Dev</div>
      <div className={`text-left bg-white/5 w-full p-10 rounded-[50px] my-10 relative border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50 hover:-translate-y-1 overflow-hidden`}>
        <img src={sword} alt="" className="absolute top-0 -right-15 h-full mask-l-from-40% mask-l-to-80% -z-1"/>
        <div className="z-5">
          <div className="text-4xl font-medium py-5">Музей города Каштановска</div>
          <div className="text-purple-200/80 w-2/3 bg-white/10 rounded-[25px] p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <a href="https://cloud.mail.ru/public/k3v8/UE8ex4uyi" className="w-fit flex items-center gap-2 mt-5 p-3 border border-purple-400 rounded-full transition-all duration-300 hover:text-purple-400 hover:bg-purple-200/10">
            <div className="">Посмотреть</div>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      <div className="text-left text-3xl bg-white/10 w-fit p-5 rounded-full font-medium my-10">Frontend</div>
      <div className="text-left text-3xl bg-white/10 w-fit p-5 rounded-full font-medium my-10">Backend</div>
      <div className="text-left text-3xl bg-white/10 w-fit p-5 rounded-full font-medium my-10">Mobile Apps</div>
      <div className="text-left text-3xl bg-white/10 w-fit p-5 rounded-full font-medium my-10">Other</div>
    </div>
    </>
    )
}
export default Projects