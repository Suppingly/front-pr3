import express from 'express';
const router = express.Router();
import pool from '../db.js';

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { title, description, category, image, link } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO projects (title, description, category, image, link) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, category, image, link]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Можно добавить PUT и DELETE по аналогии с skills.js
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await pool.query('DELETE FROM projects WHERE id = $1', [id]);
      res.json({ message: 'Проект удален' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

export default router