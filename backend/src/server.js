import express from 'express';
import cors from 'cors';
import initDatabase from './config/index.js';

import skillsRouter from './routes/skills.js';
import projectsRouter from './routes/projects.js';
import achievementsRouter from './routes/achievements.js';
import contactsRouter from './routes/contacts.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Инициализация базы данных
initDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Маршруты
app.use('/api/skills', skillsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/achievements', achievementsRouter);
app.use('/api/contacts', contactsRouter);

// Обработка 404
app.use((req, res) => {
    res.status(404).json({ error: 'Маршрут не найден' });
});

// Обработка ошибок
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    console.log(`API доступно по адресу http://localhost:${PORT}/api`);
});
