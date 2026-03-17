import express from 'express';
import projectsModel from '../models/projects.js';

const router = express.Router();

// Получить все проекты
router.get('/', (req, res) => {
    try {
        const projects = projectsModel.findAll();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить проект по ID
router.get('/:id', (req, res) => {
    try {
        const project = projectsModel.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Проект не найден' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить проекты по категории
router.get('/category/:category', (req, res) => {
    try {
        const projects = projectsModel.findByCategory(req.params.category);
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Создать проект
router.post('/', (req, res) => {
    try {
        const { title, description, category, image, link } = req.body;
        if (!title || !category) {
            return res.status(400).json({ error: 'Поля title и category обязательны' });
        }
        const project = projectsModel.create({ title, description, category, image, link });
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Обновить проект
router.put('/:id', (req, res) => {
    try {
        const { title, description, category, image, link } = req.body;
        if (!title || !category) {
            return res.status(400).json({ error: 'Поля title и category обязательны' });
        }
        const project = projectsModel.update(req.params.id, { title, description, category, image, link });
        if (!project) {
            return res.status(404).json({ error: 'Проект не найден' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Удалить проект
router.delete('/:id', (req, res) => {
    try {
        const result = projectsModel.delete(req.params.id);
        if (result.changes === 0) {
            return res.status(404).json({ error: 'Проект не найден' });
        }
        res.json({ message: 'Проект удалён' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
