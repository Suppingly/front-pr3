import './achievements.css'
import { useState,useEffect } from 'react';

// 1. Типы данных
interface Stat {
  id: number;
  label: string;
  value: string;
  color: string; // Tailwind color class for the icon bg
}

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'Награда' | 'Сертификат' | 'Участие в конкурсе';
}

// 2. Данные
const statsData: Stat[] = [
  {
    id: 1,
    label: "Лет опыта",
    value: "5+",
    color: "bg-blue-300"
  },
  {
    id: 2,
    label: "Успешных проектов",
    value: "40+",
    color: "bg-red-300"
  },
  {
    id: 3,
    label: "Довольных клиентов",
    value: "25+",
    color: "bg-green-300"
  },
  {
    id: 4,
    label: "Наград",
    value: "12",
    color: "bg-purple-300"
  }
];

const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "Лучший Frontend Разработчик",
    organization: "TechConf 2022",
    date: "Октябрь 2022",
    description: "Победа в конкурсе по оптимизации производительности React приложений.",
    type: "Награда"
  },
  {
    id: 2,
    title: "Заслуженныый архитектор проектирования Limno",
    organization: "Limno",
    date: "Июнь 2022",
    description: "Профессиональная сертификация по проектированию распределенных систем на Limno.",
    type: "Сертификат"
  },
  {
    id: 3,
    title: "Проектирование нейроинтерфейсов: 3 место",
    organization: "Профессионалы",
    date: "Февраль 2026",
    description: "3-е место за создание прототипа приложения здоровья для водителей.",
    type: "Участие в конкурсе"
  },
  {
    id: 4,
    title: "UX Design Сертификат",
    organization: "Техуслуги",
    date: "Январь 2023",
    description: "Профессиональный сертификат по основам дизайна пользовательского опыта.",
    type: "Сертификат"
  },
  {
    id: 5,
    title: "Сотрудник года",
    organization: "Dodloe",
    date: "Декабрь 2025",
    description: "Признание за выдающийся вклад в развитие внутреннего дизайн-системы.",
    type: "Награда"
  },
  {
    id: 6,
    title: "Top Contributor Open Source",
    organization: "GitHub",
    date: "2022 - 2026",
    description: "Вклад в популярные open-source библиотеки (более 500 коммитов).",
    type: "Награда"
  }
];

const Achievements: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
      useEffect(() => {
          setIsVisible(true)
        }, [])
  return (
    <section className={`min-h-screen py-20 transition-all duration-1000 ${isVisible ? '-translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
      <h6 className={`text-5xl w-fit h-15 font-bold text-left bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000`}>Мои успехи</h6>
      <p className="text-2xl text-left text-purple-200/80">
        Признание профессионализма через цифры, сертификаты и победы в конкурсах.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
        {statsData.map((stat) => (
          <div 
            key={stat.id}
            className="bg-white/5 w-full p-10 rounded-[50px] my-10 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50 hover:-translate-y-1 overflow-hidden flex flex-col items-center"
          >
            <div className={`p-3 rounded-full mb-4 size-1 ${stat.color}`}>
            </div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-purple-200/80 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mb-16">
        <span className="px-3 text-4xl font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Награды и Сертификаты
          </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((item) => (
          <div 
            key={item.id}
            className="bg-white/5 w-full px-10 py-5 rounded-[20px] border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50 hover:-translate-y-1 overflow-hidden select-none group"
          >
            <div className={`absolute top-0 left-0 w-1 h-full 
              ${item.type === 'Награда' ? 'bg-yellow-400' : 
                item.type === 'Участие в конкурсе' ? 'bg-purple-400' : 'bg-blue-400'}`} 
            />

            <div className="flex justify-between items-start mb-4 pl-3">
              <div className={`flex items-center text-xs ${item.type === 'Награда' ? 'text-yellow-200' : 
              item.type === 'Участие в конкурсе' ? 'text-purple-200' : 'text-blue-200'} font-medium bg-white/10 px-2 py-1 rounded`}>
                {item.type}
              </div>
              <div className="flex items-center text-xs text-purple-300 font-medium bg-white/10 px-2 py-1 rounded">
                {item.date}
              </div>
            </div>

            <div className="pl-3">
              <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-purple-500 group-hover:to-pink-500) bg-clip-text text-transparent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-purple-200/80 group-hover:text-purple-400/80 transition-colors mb-3">
                {item.organization}
              </p>
              <p className="text-sm text-purple-200/80 leading-relaxed">
                {item.description}
              </p>
            </div>
            
            <div className="pl-3 mt-4 pt-4 border-t border-white/20">
              <button className="text-white gap-2 font-medium hover:text-purple-400 flex items-center transition-colors cursor-pointer">
                Подробнее
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements