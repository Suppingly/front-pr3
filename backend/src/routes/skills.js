import express from 'express';
import skillsModel from '../models/skills.js';

const router = express.Router();

// Получить все навыки
router.get('/', (req, res) => {
    try {
        const skills = skillsModel.findAll();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить навык по ID
router.get('/:id', (req, res) => {
    try {
        const skill = skillsModel.findById(req.params.id);
        if (!skill) {
            return res.status(404).json({ error: 'Навык не найден' });
        }
        res.json(skill);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить навыки по категории
router.get('/category/:category', (req, res) => {
    try {
        const skills = skillsModel.findByCategory(req.params.category);
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Создать навык
router.post('/', (req, res) => {
    try {
        const { name, category, level, description } = req.body;
        if (!name || !category || level === undefined) {
            return res.status(400).json({ error: 'Поля name, category и level обязательны' });
        }
        const skill = skillsModel.create({ name, category, level, description });
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Обновить навык
router.put('/:id', (req, res) => {
    try {
        const { name, category, level, description } = req.body;
        if (!name || !category || level === undefined) {
            return res.status(400).json({ error: 'Поля name, category и level обязательны' });
        }
        const skill = skillsModel.update(req.params.id, { name, category, level, description });
        if (!skill) {
            return res.status(404).json({ error: 'Навык не найден' });
        }
        res.json(skill);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Удалить навык
router.delete('/:id', (req, res) => {
    try {
        const result = skillsModel.delete(req.params.id);
        if (result.changes === 0) {
            return res.status(404).json({ error: 'Навык не найден' });
        }
        res.json({ message: 'Навык удалён' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
