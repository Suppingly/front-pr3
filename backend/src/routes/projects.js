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
  const { id,title, description, category, image, link } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO projects (id, title, description, category, image, link) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [id,title, description, category, image, link]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, category, image, link } = req.body;
  try {
    const result = await pool.query(
      'UPDATE projects SET title=$1, description=$2, category=$3, image=$4, link=$5 WHERE id=$6 RETURNING *',
      [title, description, category, image, link, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Проект не найден' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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