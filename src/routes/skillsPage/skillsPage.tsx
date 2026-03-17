import './skills.css'
import ConstellationCanvas from '../../components/constellation'
import { usePageAnimation } from '../../hooks/usePageAnimation'
import { useState, useEffect } from 'react'
import { skillsApi, type Skill } from '../../services/api'

function getLevelInfo(level: number) {
    if (level >= 80) return { label: 'Замечательно', color: 'text-green-400' }
    if (level >= 60) return { label: 'Средне', color: 'text-yellow-400' }
    return { label: 'Немного', color: 'text-red-400' }
}

function Skills(){
  const isVisible = usePageAnimation()
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    skillsApi.getAll()
        .then(data => {
            setSkills(data)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setLoading(false)
        })
  }, [])

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
        acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const categoryColors: Record<string, string> = {
    'Frontend': 'text-sky-300',
    'Backend': 'text-green-500',
    'GameDev': 'text-fuchsia-300',
    'Mobile': 'text-amber-500',
    'Other': 'text-red-400'
  }

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
        
        {loading ? (
            <div className="flex justify-center items-center gap-2">
                <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-purple-200">Загрузка навыков...</span>
            </div>
        ) : (
            <div className='skillsTable'>
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div className='skillFracSection' key={category}>
                <h3 className={`skillFrac ${categoryColors[category] || 'text-white'}`}>{category}</h3>
                <table className='skillFracT'>
                    <tbody>
                    {categorySkills.map((skill) => {
                        const levelInfo = getLevelInfo(skill.level)
                        return (
                        <tr key={skill.id} className='skillDesc'>
                            <td className='w-1/2'>
                            <div className='skill'>{skill.name}</div>
                            </td>
                            <td className={`font-bold ${levelInfo.color} text-xl`}>{levelInfo.label}</td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
                </div>
            ))}
            </div>
        )}
      </section>
    </div>
    </>
  )
}
export default Skills
