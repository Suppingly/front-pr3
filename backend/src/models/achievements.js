import db from '../config/database.js';

class AchievementsModel {
    findAll() {
        return db.prepare('SELECT * FROM achievements ORDER BY date DESC').all();
    }

    findById(id) {
        return db.prepare('SELECT * FROM achievements WHERE id = ?').get(id);
    }

    findByType(type) {
        return db.prepare('SELECT * FROM achievements WHERE type = ? ORDER BY date DESC').all(type);
    }

    create({ title, type, description, date, organization }) {
        const stmt = db.prepare(`
            INSERT INTO achievements (title, type, description, date, organization)
            VALUES (?, ?, ?, ?, ?)
        `);
        const result = stmt.run(title, type, description || null, date, organization || null);
        return this.findById(result.lastInsertRowid);
    }

    update(id, { title, type, description, date, organization }) {
        const stmt = db.prepare(`
            UPDATE achievements
            SET title = ?, type = ?, description = ?, date = ?, organization = ?
            WHERE id = ?
        `);
        stmt.run(title, type, description || null, date, organization || null, id);
        return this.findById(id);
    }

    delete(id) {
        const stmt = db.prepare('DELETE FROM achievements WHERE id = ?');
        return stmt.run(id);
    }
}

export default new AchievementsModel();
