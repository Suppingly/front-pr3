import express from 'express';
const router = express.Router();
import pool from '../db.js';

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { id,type,value } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO contacts (id,type,value) VALUES ($1, $2, $3) RETURNING *',
      [id,type,value]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { type, value } = req.body;
  try {
    const result = await pool.query(
      'UPDATE contacts SET type=$1, value=$2 WHERE id=$3 RETURNING *',
      [type, value, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Контакт не найден' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
      res.json({ message: 'Контакт удален' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

export default router