import db from '../config/database.js';

class ContactsModel {
    findAll() {
        return db.prepare('SELECT * FROM contacts ORDER BY type').all();
    }

    findById(id) {
        return db.prepare('SELECT * FROM contacts WHERE id = ?').get(id);
    }

    findByType(type) {
        return db.prepare('SELECT * FROM contacts WHERE type = ?').all(type);
    }

    create({ type, value }) {
        const stmt = db.prepare(`
            INSERT INTO contacts (type, value)
            VALUES (?, ?)
        `);
        const result = stmt.run(type, value);
        return this.findById(result.lastInsertRowid);
    }

    update(id, { type, value }) {
        const stmt = db.prepare(`
            UPDATE contacts
            SET type = ?, value = ?
            WHERE id = ?
        `);
        stmt.run(type, value, id);
        return this.findById(id);
    }

    delete(id) {
        const stmt = db.prepare('DELETE FROM contacts WHERE id = ?');
        return stmt.run(id);
    }
}

export default new ContactsModel();
