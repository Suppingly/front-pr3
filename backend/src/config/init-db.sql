-- Таблица навыков (skills)
CREATE TABLE IF NOT EXISTS skills (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Frontend', 'Backend', 'GameDev', 'Mobile', 'Other')),
    level INTEGER NOT NULL CHECK (level >= 0 AND level <= 100),
    description TEXT
);

-- Таблица проектов (projects)
CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    image TEXT,
    link TEXT,
    created_at TEXT DEFAULT (datetime('now'))
);

-- Таблица достижений (achievements)
CREATE TABLE IF NOT EXISTS achievements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('certificate', 'award', 'competition')),
    description TEXT,
    date TEXT NOT NULL,
    organization TEXT
);

-- Таблица контактов (contacts)
CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL CHECK (type IN ('email', 'github', 'telegram', 'phone', 'linkedin', 'other')),
    value TEXT NOT NULL
);
