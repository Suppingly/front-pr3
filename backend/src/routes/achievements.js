import express from 'express';
import achievementsModel from '../models/achievements.js';

const router = express.Router();

// Получить все достижения
router.get('/', (req, res) => {
    try {
        const achievements = achievementsModel.findAll();
        res.json(achievements);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить достижение по ID
router.get('/:id', (req, res) => {
    try {
        const achievement = achievementsModel.findById(req.params.id);
        if (!achievement) {
            return res.status(404).json({ error: 'Достижение не найдено' });
        }
        res.json(achievement);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить достижения по типу
router.get('/type/:type', (req, res) => {
    try {
        const achievements = achievementsModel.findByType(req.params.type);
        res.json(achievements);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Создать достижение
router.post('/', (req, res) => {
    try {
        const { title, type, description, date, organization } = req.body;
        if (!title || !type || !date) {
            return res.status(400).json({ error: 'Поля title, type и date обязательны' });
        }
        const achievement = achievementsModel.create({ title, type, description, date, organization });
        res.status(201).json(achievement);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Обновить достижение
router.put('/:id', (req, res) => {
    try {
        const { title, type, description, date, organization } = req.body;
        if (!title || !type || !date) {
            return res.status(400).json({ error: 'Поля title, type и date обязательны' });
        }
        const achievement = achievementsModel.update(req.params.id, { title, type, description, date, organization });
        if (!achievement) {
            return res.status(404).json({ error: 'Достижение не найдено' });
        }
        res.json(achievement);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Удалить достижение
router.delete('/:id', (req, res) => {
    try {
        const result = achievementsModel.delete(req.params.id);
        if (result.changes === 0) {
            return res.status(404).json({ error: 'Достижение не найдено' });
        }
        res.json({ message: 'Достижение удалено' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
