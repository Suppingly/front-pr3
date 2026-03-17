import db from '../config/database.js';

class ProjectsModel {
    findAll() {
        return db.prepare('SELECT * FROM projects ORDER BY created_at DESC').all();
    }

    findById(id) {
        return db.prepare('SELECT * FROM projects WHERE id = ?').get(id);
    }

    findByCategory(category) {
        return db.prepare('SELECT * FROM projects WHERE category = ? ORDER BY created_at DESC').all(category);
    }

    create({ title, description, category, image, link }) {
        const stmt = db.prepare(`
            INSERT INTO projects (title, description, category, image, link)
            VALUES (?, ?, ?, ?, ?)
        `);
        const result = stmt.run(title, description || null, category, image || null, link || null);
        return this.findById(result.lastInsertRowid);
    }

    update(id, { title, description, category, image, link }) {
        const stmt = db.prepare(`
            UPDATE projects
            SET title = ?, description = ?, category = ?, image = ?, link = ?
            WHERE id = ?
        `);
        stmt.run(title, description || null, category, image || null, link || null, id);
        return this.findById(id);
    }

    delete(id) {
        const stmt = db.prepare('DELETE FROM projects WHERE id = ?');
        return stmt.run(id);
    }
}

export default new ProjectsModel();
