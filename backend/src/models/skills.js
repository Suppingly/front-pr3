import db from '../config/database.js';

class SkillsModel {
    findAll() {
        return db.prepare('SELECT * FROM skills ORDER BY category, name').all();
    }

    findById(id) {
        return db.prepare('SELECT * FROM skills WHERE id = ?').get(id);
    }

    findByCategory(category) {
        return db.prepare('SELECT * FROM skills WHERE category = ? ORDER BY name').all(category);
    }

    create({ name, category, level, description }) {
        const stmt = db.prepare(`
            INSERT INTO skills (name, category, level, description)
            VALUES (?, ?, ?, ?)
        `);
        const result = stmt.run(name, category, level, description || null);
        return this.findById(result.lastInsertRowid);
    }

    update(id, { name, category, level, description }) {
        const stmt = db.prepare(`
            UPDATE skills
            SET name = ?, category = ?, level = ?, description = ?
            WHERE id = ?
        `);
        stmt.run(name, category, level, description || null, id);
        return this.findById(id);
    }

    delete(id) {
        const stmt = db.prepare('DELETE FROM skills WHERE id = ?');
        return stmt.run(id);
    }
}

export default new SkillsModel();
