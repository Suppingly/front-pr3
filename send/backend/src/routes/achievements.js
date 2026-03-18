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
      'INSERT INTO achievements (id,type,value) VALUES ($1, $2, $3) RETURNING *',
      [id,title,type,description,date,organization]
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
      await pool.query('DELETE FROM achievements WHERE id = $1', [id]);
      res.json({ message: 'Контакт удален' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

export default router