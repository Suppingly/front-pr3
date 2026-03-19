import express from 'express';
const router = express.Router();
import pool from '../db.js';

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM achievements ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { id,title,type,description,date,organization } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO achievements (id,title,type,description,date,organization) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [id,title,type,description,date,organization]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, type, description, date, organization } = req.body;
  try {
    const result = await pool.query(
      'UPDATE achievements SET title=$1, type=$2, description=$3, date=$4, organization=$5 WHERE id=$6 RETURNING *',
      [title, type, description, date, organization, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Достижение не найдено' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await pool.query('DELETE FROM achievements WHERE id = $1', [id]);
      res.json({ message: 'Достижение удалено' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

export default router