-- Таблица навыков
CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Frontend', 'Backend', 'GameDev', 'Mobile', 'Other')),
    level INTEGER NOT NULL CHECK (level >= 0 AND level <= 100),
    description TEXT
);

-- Таблица проектов
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    image TEXT,
    link TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Таблица достижений
CREATE TABLE IF NOT EXISTS achievements (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('certificate', 'award', 'competition')),
    description TEXT,
    date DATE NOT NULL,
    organization TEXT
);

-- Таблица контактов
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    type TEXT NOT NULL CHECK (type IN ('email', 'github', 'telegram', 'phone', 'linkedin', 'other')),
    value TEXT NOT NULL
);

-- Начальные данные контактов
INSERT INTO contacts (id, type, value) VALUES (1, 'email', 'hello@portfolio.com') ON CONFLICT(id) DO NOTHING;
INSERT INTO contacts (id, type, value) VALUES (2, 'github', 'https://github.com/Suppingly') ON CONFLICT(id) DO NOTHING;
INSERT INTO contacts (id, type, value) VALUES (3, 'telegram', 'https://t.me/username') ON CONFLICT(id) DO NOTHING;

-- Начальные данные навыков (skills)
-- Frontend
INSERT INTO skills (id, name, category, level, description) VALUES (1, 'JavaScript', 'Frontend', 85, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (2, 'React', 'Frontend', 70, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (3, 'Next.js', 'Frontend', 40, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (4, 'CSS', 'Frontend', 70, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (5, 'Tailwind CSS', 'Frontend', 70, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (6, 'HTML5', 'Frontend', 80, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (7, 'Vue.js', 'Frontend', 60, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (8, 'SASS', 'Frontend', 65, NULL) ON CONFLICT(id) DO NOTHING;

-- Backend
INSERT INTO skills (id, name, category, level, description) VALUES (9, 'Node.js', 'Backend', 70, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (10, 'Python', 'Backend', 85, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (11, 'PostgreSQL', 'Backend', 65, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (12, 'TypeScript', 'Backend', 70, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (13, 'Express.js', 'Backend', 65, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (14, 'SQLite', 'Backend', 70, NULL) ON CONFLICT(id) DO NOTHING;

-- GameDev
INSERT INTO skills (id, name, category, level, description) VALUES (15, 'Unity', 'GameDev', 70, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (16, 'C#', 'GameDev', 75, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (17, 'Unreal Engine', 'GameDev', 40, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (18, 'C++', 'GameDev', 50, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (19, 'Blender', 'GameDev', 55, NULL) ON CONFLICT(id) DO NOTHING;

-- Mobile
INSERT INTO skills (id, name, category, level, description) VALUES (20, 'Java', 'Mobile', 65, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (21, 'Kotlin', 'Mobile', 45, NULL) ON CONFLICT(id) DO NOTHING;

-- Other
INSERT INTO skills (id, name, category, level, description) VALUES (22, 'Git', 'Other', 75, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (23, 'Webpack', 'Other', 60, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (24, 'Vite', 'Other', 70, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (25, 'Docker', 'Other', 55, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (26, 'Linux', 'Other', 65, NULL) ON CONFLICT(id) DO NOTHING;
INSERT INTO skills (id, name, category, level, description) VALUES (27, 'CI/CD', 'Other', 60, NULL) ON CONFLICT(id) DO NOTHING;

-- Начальные данные проектов (projects)
INSERT INTO projects (id, title, description, category, image, link) VALUES (1, 'Музей города Каштановска', 'Виртуальный музей города Каштановска с интересными артифактами и увлекательными заданиями.', 'GameDev', 'museum.png', 'https://cloud.mail.ru/public/k3v8/UE8ex4uyi') ON CONFLICT(id) DO NOTHING;
INSERT INTO projects (id, title, description, category, image, link) VALUES (2, 'Автокликер', 'Инструмент для автоматизации кликов мышкой.', 'Other', 'autoclicker.png', '') ON CONFLICT(id) DO NOTHING;
INSERT INTO projects (id, title, description, category, image, link) VALUES (3, 'Найди пары', 'Игра на поиск парных изображений.', 'GameDev', 'matches.png', '') ON CONFLICT(id) DO NOTHING;
INSERT INTO projects (id, title, description, category, image, link) VALUES (4, 'Тг бот - Менеджер задач', 'Телеграм бот для трекинга задач с диаграммами Ганта.', 'Backend', 'tgbot.png', '') ON CONFLICT(id) DO NOTHING;
INSERT INTO projects (id, title, description, category, image, link) VALUES (5, 'Дед мороз - Подаркосбор', 'Новогодняя игра про сбор подарков.', 'GameDev', 'winter.png', '') ON CONFLICT(id) DO NOTHING;
INSERT INTO projects (id, title, description, category, image, link) VALUES (6, 'Мега калькулятор', 'Мобильное приложение калькулятор.', 'Mobile', 'mobile.jpg', '') ON CONFLICT(id) DO NOTHING;
INSERT INTO projects (id, title, description, category, image, link) VALUES (7, 'Лендинг сайта', 'Сайт для цифрового агентства с несколькими страницами.', 'Frontend', 'site.png', '') ON CONFLICT(id) DO NOTHING;

-- Начальные данные достижений (achievements)
INSERT INTO achievements (id, title, type, description, date, organization) VALUES (1, 'Лучший Frontend Разработчик', 'award', 'Победа в конкурсе по оптимизации производительности React приложений.', '2022-10-01', 'TechConf 2022') ON CONFLICT(id) DO NOTHING;
INSERT INTO achievements (id, title, type, description, date, organization) VALUES (2, 'Заслуженный архитектор проектирования Limno', 'certificate', 'Профессиональная сертификация по проектированию распределенных систем.', '2022-06-01', 'Limno') ON CONFLICT(id) DO NOTHING;
INSERT INTO achievements (id, title, type, description, date, organization) VALUES (3, 'Проектирование нейроинтерфейсов: 3 место', 'competition', '3-е место за создание прототипа приложения здоровья для водителей.', '2026-02-01', 'Профессионалы') ON CONFLICT(id) DO NOTHING;
INSERT INTO achievements (id, title, type, description, date, organization) VALUES (4, 'UX Design Сертификат', 'certificate', 'Профессиональный сертификат по основам дизайна пользовательского опыта.', '2023-01-01', 'Техуслуги') ON CONFLICT(id) DO NOTHING;
INSERT INTO achievements (id, title, type, description, date, organization) VALUES (5, 'Сотрудник года', 'award', 'Признание за выдающийся вклад в развитие внутренней дизайн-системы.', '2025-12-01', 'Dodloe') ON CONFLICT(id) DO NOTHING;
INSERT INTO achievements (id, title, type, description, date, organization) VALUES (6, 'Top Contributor Open Source', 'award', 'Вклад в популярные open-source библиотеки (более 500 коммитов).', '2022-01-01', 'GitHub') ON CONFLICT(id) DO NOTHING;
