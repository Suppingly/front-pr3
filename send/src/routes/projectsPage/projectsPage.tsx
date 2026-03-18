import { usePageAnimation } from "../../hooks/usePageAnimation"
import { useState, useEffect } from "react"
import { projectsApi, type Project } from "../../services/api"
import museum from '../../assets/museum.png'
import matches from '../../assets/matches.png'
import autoclicker from '../../assets/autoclicker.png'
import tgbot from '../../assets/tgbot.png'
import winter from '../../assets/winter.png'
import mobile from '../../assets/mobile.jpg'
import site from '../../assets/site.png'

const projectImages: Record<string, string> = {
    'Музей города Каштановска': museum,
    'Автокликер': autoclicker,
    'Найди пары': matches,
    'Тг бот - Менеджер задач': tgbot,
    'Дед мороз - Подаркосбор': winter,
    'Мега калькулятор': mobile,
    'Лендинг сайта': site
}

function Projects(){
  const isVisible = usePageAnimation()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    projectsApi.getAll()
        .then(data => {
            setProjects(data)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setLoading(false)
        })
  }, [])

  const categories = ['GameDev', 'Frontend', 'Backend', 'Mobile', 'Other']

  return (
    <>
    <div className={`py-20 transition-all duration-1000 ${isVisible ? '-translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
      <h6 className="text-5xl w-fit h-15 font-bold text-left bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Мои проекты</h6>
      
      {loading ? (
        <div className="flex justify-center items-center gap-2 mt-10">
            <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-purple-200">Загрузка проектов...</span>
        </div>
      ) : (
        <>
        {categories.map(category => {
            const categoryProjects = projects.filter(p => p.category === category)
            if (categoryProjects.length === 0) return null
            
            return (
                <div key={category}>
                    <div className="text-left text-3xl bg-white/10 w-fit p-5 rounded-full font-medium my-10">{category}</div>
                    {categoryProjects.map((project) => (
                        <div className={`text-left bg-white/5 w-full p-10 rounded-[50px] my-10 relative border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50 hover:-translate-y-1 overflow-hidden`} key={project.id}>
                        <img src={projectImages[project.title] || ''} alt={project.title} className="absolute top-0 -right-15 h-full mask-l-from-70% mask-l-to-100% -z-1"/>
                        <div className="z-5">
                            <div className="text-4xl font-medium py-5">{project.title}</div>
                            <div className="text-purple-200/80 w-1/2 bg-white/10 rounded-[25px] p-3">{project.description}</div>
                            <a href={project.link || '#'} className="w-fit flex items-center gap-2 mt-5 p-3 border border-purple-400 rounded-full transition-all duration-300 hover:text-purple-400 hover:bg-purple-200/10">
                            <div className="">Посмотреть</div>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            </a>
                        </div>
                        </div>
                    ))}
                </div>
            )
        })}
        </>
      )}
    </div>
    </>
    )
}
export default Projects
