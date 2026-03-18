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

export const contactsApi = {
    async getAll(): Promise<Contact[]> {
        const response = await fetch(`${API_BASE_URL}/contacts`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке контактов');
        }
        return response.json();
    },

    async getById(id: number): Promise<Contact> {
        const response = await fetch(`${API_BASE_URL}/contacts/${id}`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке контакта');
        }
        return response.json();
    },

    async getByType(type: string): Promise<Contact[]> {
        const response = await fetch(`${API_BASE_URL}/contacts/type/${type}`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке контактов по типу');
        }
        return response.json();
    }
};

export const skillsApi = {
    async getAll(): Promise<Skill[]> {
        const response = await fetch(`${API_BASE_URL}/skills`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке навыков');
        }
        return response.json();
    },

    async getById(id: number): Promise<Skill> {
        const response = await fetch(`${API_BASE_URL}/skills/${id}`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке навыка');
        }
        return response.json();
    },

    async getByCategory(category: string): Promise<Skill[]> {
        const response = await fetch(`${API_BASE_URL}/skills/category/${category}`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке навыков по категории');
        }
        return response.json();
    }
};

export const projectsApi = {
    async getAll(): Promise<Project[]> {
        const response = await fetch(`${API_BASE_URL}/projects`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке проектов');
        }
        return response.json();
    },

    async getById(id: number): Promise<Project> {
        const response = await fetch(`${API_BASE_URL}/projects/${id}`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке проекта');
        }
        return response.json();
    },

    async getByCategory(category: string): Promise<Project[]> {
        const response = await fetch(`${API_BASE_URL}/projects/category/${category}`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке проектов по категории');
        }
        return response.json();
    }
};

export const achievementsApi = {
    async getAll(): Promise<Achievement[]> {
        const response = await fetch(`${API_BASE_URL}/achievements`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке достижений');
        }
        return response.json();
    },

    async getById(id: number): Promise<Achievement> {
        const response = await fetch(`${API_BASE_URL}/achievements/${id}`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке достижения');
        }
        return response.json();
    },

    async getByType(type: string): Promise<Achievement[]> {
        const response = await fetch(`${API_BASE_URL}/achievements/type/${type}`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке достижений по типу');
        }
        return response.json();
    }
};
