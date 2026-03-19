import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Инициализация БД (выполнение SQL скрипта при старте, если таблиц нет)
import pool from './db.js';
const sqlSchema = fs.readFileSync(path.join('src/schema.sql'), 'utf8');

pool.query(sqlSchema)
  .then(() => console.log('Таблицы базы данных проверены/созданы'))
  .catch(err => console.error('Ошибка инициализации БД', err));

// Подключение маршрутов
import skillsRouter from './routes/skills.js';
import projectsRouter from './routes/projects.js';
import achievementsRouter from './routes/achievements.js';
import contactsRouter from './routes/contacts.js';

app.use('/api/skills', skillsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/achievements', achievementsRouter);
app.use('/api/contacts', contactsRouter);

// Тестовый маршрут
app.get('/', (req, res) => {
  res.send('API сервер портфолио работает!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});