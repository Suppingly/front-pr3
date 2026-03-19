const API_BASE_URL = 'http://localhost:3000/api';

export interface Contact {
    id: number;
    type: 'email' | 'github' | 'telegram' | 'phone' | 'linkedin' | 'other';
    value: string;
}

export interface Skill {
    id: number;
    name: string;
    category: 'Frontend' | 'Backend' | 'GameDev' | 'Mobile' | 'Other';
    level: number;
    description: string | null;
}

export interface Project {
    id: number;
    title: string;
    description: string | null;
    category: string;
    image: string | null;
    link: string | null;
    created_at: string;
}

export interface Achievement {
    id: number;
    title: string;
    type: 'award' | 'certificate' | 'competition';
    description: string | null;
    date: string;
    organization: string | null;
}

// Projects CRUD
export const adminProjectsApi = {
    async getAll(): Promise<Project[]> {
        const response = await fetch(`${API_BASE_URL}/projects`);
        if (!response.ok) throw new Error('Ошибка при загрузке проектов');
        return response.json();
    },

    async getById(id: number): Promise<Project> {
        const response = await fetch(`${API_BASE_URL}/projects/${id}`);
        if (!response.ok) throw new Error('Ошибка при загрузке проекта');
        return response.json();
    },

    async create(project: Omit<Project, 'created_at'>): Promise<Project> {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
        });
        if (!response.ok) throw new Error('Ошибка при создании проекта');
        return response.json();
    },

    async update(id: number, project: Partial<Project>): Promise<Project> {
        const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
        });
        if (!response.ok) throw new Error('Ошибка при обновлении проекта');
        return response.json();
    },

    async delete(id: number): Promise<void> {
        const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Ошибка при удалении проекта');
    }
};

// Skills CRUD
export const adminSkillsApi = {
    async getAll(): Promise<Skill[]> {
        const response = await fetch(`${API_BASE_URL}/skills`);
        if (!response.ok) throw new Error('Ошибка при загрузке навыков');
        return response.json();
    },

    async getById(id: number): Promise<Skill> {
        const response = await fetch(`${API_BASE_URL}/skills/${id}`);
        if (!response.ok) throw new Error('Ошибка при загрузке навыка');
        return response.json();
    },

    async create(skill: Skill): Promise<Skill> {
        const response = await fetch(`${API_BASE_URL}/skills`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(skill)
        });
        if (!response.ok) throw new Error('Ошибка при создании навыка');
        return response.json();
    },

    async update(id: number, skill: Partial<Skill>): Promise<Skill> {
        const response = await fetch(`${API_BASE_URL}/skills/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(skill)
        });
        if (!response.ok) throw new Error('Ошибка при обновлении навыка');
        return response.json();
    },

    async delete(id: number): Promise<void> {
        const response = await fetch(`${API_BASE_URL}/skills/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Ошибка при удалении навыка');
    }
};

// Achievements CRUD
export const adminAchievementsApi = {
    async getAll(): Promise<Achievement[]> {
        const response = await fetch(`${API_BASE_URL}/achievements`);
        if (!response.ok) throw new Error('Ошибка при загрузке достижений');
        return response.json();
    },

    async getById(id: number): Promise<Achievement> {
        const response = await fetch(`${API_BASE_URL}/achievements/${id}`);
        if (!response.ok) throw new Error('Ошибка при загрузке достижения');
        return response.json();
    },

    async create(achievement: Achievement): Promise<Achievement> {
        const response = await fetch(`${API_BASE_URL}/achievements`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(achievement)
        });
        if (!response.ok) throw new Error('Ошибка при создании достижения');
        return response.json();
    },

    async update(id: number, achievement: Partial<Achievement>): Promise<Achievement> {
        const response = await fetch(`${API_BASE_URL}/achievements/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(achievement)
        });
        if (!response.ok) throw new Error('Ошибка при обновлении достижения');
        return response.json();
    },

    async delete(id: number): Promise<void> {
        const response = await fetch(`${API_BASE_URL}/achievements/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Ошибка при удалении достижения');
    }
};

// Contacts CRUD
export const adminContactsApi = {
    async getAll(): Promise<Contact[]> {
        const response = await fetch(`${API_BASE_URL}/contacts`);
        if (!response.ok) throw new Error('Ошибка при загрузке контактов');
        return response.json();
    },

    async getById(id: number): Promise<Contact> {
        const response = await fetch(`${API_BASE_URL}/contacts/${id}`);
        if (!response.ok) throw new Error('Ошибка при загрузке контакта');
        return response.json();
    },

    async create(contact: Contact): Promise<Contact> {
        const response = await fetch(`${API_BASE_URL}/contacts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
        });
        if (!response.ok) throw new Error('Ошибка при создании контакта');
        return response.json();
    },

    async update(id: number, contact: Partial<Contact>): Promise<Contact> {
        const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
        });
        if (!response.ok) throw new Error('Ошибка при обновлении контакта');
        return response.json();
    },

    async delete(id: number): Promise<void> {
        const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Ошибка при удалении контакта');
    }
};
