import express from 'express';
const router = express.Router();
import pool from '../db.js';

// Получить все навыки
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM skills ORDER BY level DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Добавить навык
router.post('/', async (req, res) => {
  const { name, category, level, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO skills (name, category, level, description) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, category, level, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка при добавлении навыка' });
  }
});

// Обновить навык
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, category, level, description } = req.body;
  try {
    const result = await pool.query(
      'UPDATE skills SET name=$1, category=$2, level=$3, description=$4 WHERE id=$5 RETURNING *',
      [name, category, level, description, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Навык не найден' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка при обновлении' });
  }
});

// Удалить навык
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM skills WHERE id = $1', [id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'Навык не найден' });
    res.json({ message: 'Навык удален' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка при удалении' });
  }
});

export default router