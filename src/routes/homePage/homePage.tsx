import { usePageAnimation } from '../../hooks/usePageAnimation'
import { useState, useEffect, type ReactElement } from 'react'
import { projectsApi, skillsApi, type Project, type Skill } from '../../services/api'
import cat from '../../assets/кот.jpg'
import './home.css'

const journey = [
    { year: '2023-н.в.', role: 'Senior GameDev Developer', company: 'Dodloe' },
    { year: '2021-2023', role: 'Middle GameDev Developer', company: 'Limno' },
    { year: '2019-2021', role: 'Junior Developer', company: 'StartUp Lab' }
]

const skillIcons: Record<string, ReactElement> = {
    'Frontend': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    'GameDev': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
    ),
    'Backend': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
    ),
    'Mobile': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    ),
    'Other': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    )
}

const categoryGradients: Record<string, string> = {
    'Музей города Каштановска': 'from-blue-500 to-purple-600',
    'Тг бот - Менеджер задач': 'from-pink-500 to-rose-600',
    'Лендинг сайта': 'from-purple-500 to-indigo-600'
}

function Home() {
  const isVisible = usePageAnimation()
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
        projectsApi.getAll(),
        skillsApi.getAll()
    ])
    .then(([projectsData, skillsData]) => {
        setProjects(projectsData.slice(0, 3))
        setSkills(skillsData)
        setLoading(false)
    })
    .catch(err => {
        console.error(err)
        setLoading(false)
    })
  }, [])

  const handleScrollToContacts = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
        acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Hero секция */}
      <section className={`min-h-screen flex flex-row justify-between items-center relative overflow-hidden pt-20 pb-5 transition-all duration-1000 ${isVisible ? '-translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        {/* Анимированные фоновые элементы */}
        <div className="absolute top-1/3 left-1/7 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="herotext">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Привет, я, Куликов Александр,<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Программист
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200/80 max-w-2xl mx-auto mb-10">
            Создаю эстетичные и функциональные интерфейсы, интересные и актуальные приложения, эпичные и захватывающие игры.<br/> Специализируюсь на фуллстек-разработке, разработке приложений, создании игр и другом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleScrollToContacts}
              className="px-8 py-4 cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              Связаться со мной
            </button>
            <button
              onClick={handleScrollToProjects}
              className="px-8 py-4 cursor-pointer border-2 border-purple-400/50 rounded-full font-semibold text-lg hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 flex items-center gap-2 group"
            >
              Мои работы
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>


        </div>
        {/* Изображение/иллюстрация */}
        <div className="mt-16 w-1/2 h-fit p-5 mr-15 relative max-w-lg">
        <div className="relative z-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-500">
            <div className="aspect-video bg-gradient-to-br from-purple-600/50 to-pink-600/50 rounded-xl flex items-center justify-center">
            <svg className="w-24 h-24 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            </div>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-xl -z-10 animate-pulse"></div>
        </div>
      </section>

      {/* Секция опыта */}
      <section className="py-15 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Опыт работы
            </h2>
            <div className="space-y-8">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start group"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${activeCard === index ? 'bg-pink-400 scale-125' : 'bg-purple-500'}`}></div>
                    {index < 2 && <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent mt-2"></div>}
                  </div>
                  <div className={`flex-1 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:translate-x-2 ${activeCard === index ? 'shadow-lg shadow-purple-500/20' : ''}`}>
                    <span className="text-purple-400 font-mono text-sm">{item.year}</span>
                    <h3 className="text-xl font-bold mt-1">{item.role}</h3>
                    <p className="text-purple-200/60">{item.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Секция проектов */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Мои работы
          </h2>
          {loading ? (
            <div className="flex justify-center items-center gap-2">
                <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-purple-200">Загрузка проектов...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <a href="/projects" className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[project.title] || 'from-purple-500 to-pink-600'} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></a>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${categoryGradients[project.title] || 'from-purple-500 to-pink-600'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                  <p className="text-purple-200/70 leading-relaxed">{project.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-purple-400 group-hover:gap-4 transition-all duration-300 cursor-pointer">
                    <span>Подробнее</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Секция навыков */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Навыки
          </h2>
          {loading ? (
            <div className="flex justify-center items-center gap-2">
                <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-purple-200">Загрузка навыков...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div
                  key={category}
                  className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/50"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500 text-white">
                    {skillIcons[category] || skillIcons.Other}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.id}
                        className="px-3 py-1.5 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-200 hover:bg-purple-500/30 hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className='py-25 flex flex-col justify-center relative overflow-hidden'>
          <div className="particles-container">
            {/* Частицы */}
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>

            {/* Изображение кота */}
            <img src={cat} alt="" className="cat"/>

            {/* Анимированная тень */}
            <div className="cat-shadow"></div>
          </div>
          
          {/* Звёздочки вокруг */}
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div><p className='text-2xl font-bold'>Мой ученик</p>
      </section>
      <section className='flex justify-center'>
          
      </section>
    </div>
  )
}

export default Home
