import express from 'express';
import contactsModel from '../models/contacts.js';

const router = express.Router();

// Получить все контакты
router.get('/', (req, res) => {
    try {
        const contacts = contactsModel.findAll();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить контакт по ID
router.get('/:id', (req, res) => {
    try {
        const contact = contactsModel.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: 'Контакт не найден' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить контакты по типу
router.get('/type/:type', (req, res) => {
    try {
        const contacts = contactsModel.findByType(req.params.type);
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Создать контакт
router.post('/', (req, res) => {
    try {
        const { type, value } = req.body;
        if (!type || !value) {
            return res.status(400).json({ error: 'Поля type и value обязательны' });
        }
        const contact = contactsModel.create({ type, value });
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Обновить контакт
router.put('/:id', (req, res) => {
    try {
        const { type, value } = req.body;
        if (!type || !value) {
            return res.status(400).json({ error: 'Поля type и value обязательны' });
        }
        const contact = contactsModel.update(req.params.id, { type, value });
        if (!contact) {
            return res.status(404).json({ error: 'Контакт не найден' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Удалить контакт
router.delete('/:id', (req, res) => {
    try {
        const result = contactsModel.delete(req.params.id);
        if (result.changes === 0) {
            return res.status(404).json({ error: 'Контакт не найден' });
        }
        res.json({ message: 'Контакт удалён' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
