import { useState, useEffect } from 'react'
import {
    adminProjectsApi,
    adminSkillsApi,
    adminAchievementsApi,
    adminContactsApi,
    type Project,
    type Skill,
    type Achievement,
    type Contact
} from '../../services/adminApi'
import './admin.css'

type TabType = 'projects' | 'skills' | 'achievements' | 'contacts'
type ModalType = 'create' | 'edit' | null

function Admin() {
    const [activeTab, setActiveTab] = useState<TabType>('projects')
    const [modalType, setModalType] = useState<ModalType>(null)
    const [editingId, setEditingId] = useState<number | null>(null)

    // Data states
    const [projects, setProjects] = useState<Project[]>([])
    const [skills, setSkills] = useState<Skill[]>([])
    const [achievements, setAchievements] = useState<Achievement[]>([])
    const [contacts, setContacts] = useState<Contact[]>([])
    const [loading, setLoading] = useState(true)

    // Form states
    const [projectForm, setProjectForm] = useState<Omit<Project, 'created_at'>>({
        id: 0,
        title: '',
        description: '',
        category: '',
        image: '',
        link: ''
    })
    const [skillForm, setSkillForm] = useState<Skill>({
        id: 0,
        name: '',
        category: 'Frontend',
        level: 50,
        description: ''
    })
    const [achievementForm, setAchievementForm] = useState<Achievement>({
        id: 0,
        title: '',
        type: 'award',
        description: '',
        date: '',
        organization: ''
    })
    const [contactForm, setContactForm] = useState<Contact>({
        id: 0,
        type: 'email',
        value: ''
    })

    const loadData = async () => {
        setLoading(true)
        try {
            const [projectsData, skillsData, achievementsData, contactsData] = await Promise.all([
                adminProjectsApi.getAll(),
                adminSkillsApi.getAll(),
                adminAchievementsApi.getAll(),
                adminContactsApi.getAll()
            ])
            setProjects(projectsData)
            setSkills(skillsData)
            setAchievements(achievementsData)
            setContacts(contactsData)
        } catch (error) {
            console.error('Error loading data:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    // Project handlers
    const handleCreateProject = async () => {
        try {
            const maxId = projects.reduce((max, p) => Math.max(max, p.id), 0)
            await adminProjectsApi.create({ ...projectForm, id: maxId + 1 })
            await loadData()
            closeModal()
        } catch (error) {
            console.error('Error creating project:', error)
            alert('Ошибка при создании проекта')
        }
    }

    const handleUpdateProject = async () => {
        if (!editingId) return
        try {
            await adminProjectsApi.update(editingId, projectForm)
            await loadData()
            closeModal()
        } catch (error) {
            console.error('Error updating project:', error)
            alert('Ошибка при обновлении проекта')
        }
    }

    const handleDeleteProject = async (id: number) => {
        if (!confirm('Вы уверены, что хотите удалить этот проект?')) return
        try {
            await adminProjectsApi.delete(id)
            await loadData()
        } catch (error) {
            console.error('Error deleting project:', error)
            alert('Ошибка при удалении проекта')
        }
    }

    const openEditProject = (project: Project) => {
        setProjectForm({
            id: project.id,
            title: project.title,
            description: project.description || '',
            category: project.category,
            image: project.image || '',
            link: project.link || ''
        })
        setEditingId(project.id)
        setModalType('edit')
    }

    // Skill handlers
    const handleCreateSkill = async () => {
        try {
            const maxId = skills.reduce((max, s) => Math.max(max, s.id), 0)
            await adminSkillsApi.create({ ...skillForm, id: maxId + 1 })
            await loadData()
            closeModal()
        } catch (error) {
            console.error('Error creating skill:', error)
            alert('Ошибка при создании навыка')
        }
    }

    const handleUpdateSkill = async () => {
        if (!editingId) return
        try {
            await adminSkillsApi.update(editingId, skillForm)
            await loadData()
            closeModal()
        } catch (error) {
            console.error('Error updating skill:', error)
            alert('Ошибка при обновлении навыка')
        }
    }

    const handleDeleteSkill = async (id: number) => {
        if (!confirm('Вы уверены, что хотите удалить этот навык?')) return
        try {
            await adminSkillsApi.delete(id)
            await loadData()
        } catch (error) {
            console.error('Error deleting skill:', error)
            alert('Ошибка при удалении навыка')
        }
    }

    const openEditSkill = (skill: Skill) => {
        setSkillForm({
            id: skill.id,
            name: skill.name,
            category: skill.category,
            level: skill.level,
            description: skill.description || ''
        })
        setEditingId(skill.id)
        setModalType('edit')
    }

    // Achievement handlers
    const handleCreateAchievement = async () => {
        try {
            const maxId = achievements.reduce((max, a) => Math.max(max, a.id), 0)
            await adminAchievementsApi.create({ ...achievementForm, id: maxId + 1 })
            await loadData()
            closeModal()
        } catch (error) {
            console.error('Error creating achievement:', error)
            alert('Ошибка при создании достижения')
        }
    }

    const handleUpdateAchievement = async () => {
        if (!editingId) return
        try {
            await adminAchievementsApi.update(editingId, achievementForm)
            await loadData()
            closeModal()
        } catch (error) {
            console.error('Error updating achievement:', error)
            alert('Ошибка при обновлении достижения')
        }
    }

    const handleDeleteAchievement = async (id: number) => {
        if (!confirm('Вы уверены, что хотите удалить это достижение?')) return
        try {
            await adminAchievementsApi.delete(id)
            await loadData()
        } catch (error) {
            console.error('Error deleting achievement:', error)
            alert('Ошибка при удалении достижения')
        }
    }

    const openEditAchievement = (achievement: Achievement) => {
        setAchievementForm({
            id: achievement.id,
            title: achievement.title,
            type: achievement.type,
            description: achievement.description || '',
            date: achievement.date,
            organization: achievement.organization || ''
        })
        setEditingId(achievement.id)
        setModalType('edit')
    }

    // Contact handlers
    const handleCreateContact = async () => {
        try {
            const maxId = contacts.reduce((max, c) => Math.max(max, c.id), 0)
            await adminContactsApi.create({ ...contactForm, id: maxId + 1 })
            await loadData()
            closeModal()
        } catch (error) {
            console.error('Error creating contact:', error)
            alert('Ошибка при создании контакта')
        }
    }

    const handleUpdateContact = async () => {
        if (!editingId) return
        try {
            await adminContactsApi.update(editingId, contactForm)
            await loadData()
            closeModal()
        } catch (error) {
            console.error('Error updating contact:', error)
            alert('Ошибка при обновлении контакта')
        }
    }

    const handleDeleteContact = async (id: number) => {
        if (!confirm('Вы уверены, что хотите удалить этот контакт?')) return
        try {
            await adminContactsApi.delete(id)
            await loadData()
        } catch (error) {
            console.error('Error deleting contact:', error)
            alert('Ошибка при удалении контакта')
        }
    }

    const openEditContact = (contact: Contact) => {
        setContactForm({
            id: contact.id,
            type: contact.type,
            value: contact.value
        })
        setEditingId(contact.id)
        setModalType('edit')
    }

    const closeModal = () => {
        setModalType(null)
        setEditingId(null)
        setProjectForm({ id: 0, title: '', description: '', category: '', image: '', link: '' })
        setSkillForm({ id: 0, name: '', category: 'Frontend', level: 50, description: '' })
        setAchievementForm({ id: 0, title: '', type: 'award', description: '', date: '', organization: '' })
        setContactForm({ id: 0, type: 'email', value: '' })
    }

    const openCreateModal = () => {
        setEditingId(null)
        setModalType('create')
    }

    return (
        <div className="admin-container">
            <aside className="admin-sidebar">
                <h2 className="admin-logo">🎮 Админка</h2>
                <nav className="admin-nav">
                    <button
                        className={`admin-nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
                        onClick={() => setActiveTab('projects')}
                    >
                        📁 Проекты
                    </button>
                    <button
                        className={`admin-nav-btn ${activeTab === 'skills' ? 'active' : ''}`}
                        onClick={() => setActiveTab('skills')}
                    >
                        ⚡ Навыки
                    </button>
                    <button
                        className={`admin-nav-btn ${activeTab === 'achievements' ? 'active' : ''}`}
                        onClick={() => setActiveTab('achievements')}
                    >
                        🏆 Достижения
                    </button>
                    <button
                        className={`admin-nav-btn ${activeTab === 'contacts' ? 'active' : ''}`}
                        onClick={() => setActiveTab('contacts')}
                    >
                        📞 Контакты
                    </button>
                </nav>
            </aside>

            <main className="admin-main">
                <header className="admin-header">
                    <h1>
                        {activeTab === 'projects' && 'Управление проектами'}
                        {activeTab === 'skills' && 'Управление навыками'}
                        {activeTab === 'achievements' && 'Управление достижениями'}
                        {activeTab === 'contacts' && 'Управление контактами'}
                    </h1>
                    <button className="admin-add-btn" onClick={openCreateModal}>
                        + Добавить
                    </button>
                </header>

                {loading ? (
                    <div className="loading">
                        <div className="spinner"></div>
                        <span>Загрузка данных...</span>
                    </div>
                ) : (
                    <>
                        {activeTab === 'projects' && (
                            <div className="data-grid">
                                {projects.map(project => (
                                    <div key={project.id} className="data-card">
                                        <h3>{project.title}</h3>
                                        <p className="data-category">{project.category}</p>
                                        <p className="data-desc">{project.description}</p>
                                        <div className="data-actions">
                                            <button
                                                className="btn-edit"
                                                onClick={() => openEditProject(project)}
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                className="btn-delete"
                                                onClick={() => handleDeleteProject(project.id)}
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'skills' && (
                            <div className="data-table-container">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Название</th>
                                            <th>Категория</th>
                                            <th>Уровень</th>
                                            <th>Описание</th>
                                            <th>Действия</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {skills.map(skill => (
                                            <tr key={skill.id}>
                                                <td>{skill.name}</td>
                                                <td>
                                                    <span className="category-badge">{skill.category}</span>
                                                </td>
                                                <td>
                                                    <div className="level-bar">
                                                        <div
                                                            className="level-fill"
                                                            style={{ width: `${skill.level}%` }}
                                                        ></div>
                                                    </div>
                                                </td>
                                                <td>{skill.description}</td>
                                                <td className="data-actions">
                                                    <button
                                                        className="btn-edit"
                                                        onClick={() => openEditSkill(skill)}
                                                    >
                                                        ✏️
                                                    </button>
                                                    <button
                                                        className="btn-delete"
                                                        onClick={() => handleDeleteSkill(skill.id)}
                                                    >
                                                        🗑️
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {activeTab === 'achievements' && (
                            <div className="data-grid">
                                {achievements.map(achievement => (
                                    <div key={achievement.id} className="data-card">
                                        <h3>{achievement.title}</h3>
                                        <p className="data-category">
                                            {achievement.type === 'award' && '🏅 Награда'}
                                            {achievement.type === 'certificate' && '📜 Сертификат'}
                                            {achievement.type === 'competition' && '🎯 Конкурс'}
                                        </p>
                                        <p className="data-date">{achievement.date}</p>
                                        <p className="data-org">{achievement.organization}</p>
                                        <p className="data-desc">{achievement.description}</p>
                                        <div className="data-actions">
                                            <button
                                                className="btn-edit"
                                                onClick={() => openEditAchievement(achievement)}
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                className="btn-delete"
                                                onClick={() => handleDeleteAchievement(achievement.id)}
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'contacts' && (
                            <div className="data-table-container">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Тип</th>
                                            <th>Значение</th>
                                            <th>Действия</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contacts.map(contact => (
                                            <tr key={contact.id}>
                                                <td>
                                                    <span className="category-badge">{contact.type}</span>
                                                </td>
                                                <td>{contact.value}</td>
                                                <td className="data-actions">
                                                    <button
                                                        className="btn-edit"
                                                        onClick={() => openEditContact(contact)}
                                                    >
                                                        ✏️
                                                    </button>
                                                    <button
                                                        className="btn-delete"
                                                        onClick={() => handleDeleteContact(contact.id)}
                                                    >
                                                        🗑️
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}
            </main>

            {/* Modal */}
            {modalType && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>X</button>
                        <h2>
                            {modalType === 'create' ? 'Добавить' : 'Редактировать'}
                            {activeTab === 'projects' && ' проект'}
                            {activeTab === 'skills' && ' навык'}
                            {activeTab === 'achievements' && ' достижение'}
                            {activeTab === 'contacts' && ' контакт'}
                        </h2>

                        {activeTab === 'projects' && (
                            <div className="form-group">
                                <label>Название</label>
                                <input
                                    type="text"
                                    value={projectForm.title}
                                    onChange={e => setProjectForm({ ...projectForm, title: e.target.value })}
                                />
                                <label>Категория</label>
                                <input
                                    type="text"
                                    value={projectForm.category}
                                    onChange={e => setProjectForm({ ...projectForm, category: e.target.value })}
                                />
                                <label>Описание</label>
                                <textarea
                                    value={projectForm.description || ''}
                                    onChange={e => setProjectForm({ ...projectForm, description: e.target.value })}
                                />
                                <label>Изображение (URL)</label>
                                <input
                                    type="text"
                                    value={projectForm.image || ''}
                                    onChange={e => setProjectForm({ ...projectForm, image: e.target.value })}
                                />
                                <label>Ссылка</label>
                                <input
                                    type="text"
                                    value={projectForm.link || ''}
                                    onChange={e => setProjectForm({ ...projectForm, link: e.target.value })}
                                />
                            </div>
                        )}

                        {activeTab === 'skills' && (
                            <div className="form-group">
                                <label>Название</label>
                                <input
                                    type="text"
                                    value={skillForm.name}
                                    onChange={e => setSkillForm({ ...skillForm, name: e.target.value })}
                                />
                                <label>Категория</label>
                                <select
                                    value={skillForm.category}
                                    onChange={e => setSkillForm({ ...skillForm, category: e.target.value as Skill['category'] })}
                                >
                                    <option value="Frontend">Frontend</option>
                                    <option value="Backend">Backend</option>
                                    <option value="GameDev">GameDev</option>
                                    <option value="Mobile">Mobile</option>
                                    <option value="Other">Other</option>
                                </select>
                                <label>Уровень ({skillForm.level}%)</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={skillForm.level}
                                    onChange={e => setSkillForm({ ...skillForm, level: parseInt(e.target.value) })}
                                />
                                <label>Описание</label>
                                <textarea
                                    value={skillForm.description || ''}
                                    onChange={e => setSkillForm({ ...skillForm, description: e.target.value })}
                                />
                            </div>
                        )}

                        {activeTab === 'achievements' && (
                            <div className="form-group">
                                <label>Название</label>
                                <input
                                    type="text"
                                    value={achievementForm.title}
                                    onChange={e => setAchievementForm({ ...achievementForm, title: e.target.value })}
                                />
                                <label>Тип</label>
                                <select
                                    value={achievementForm.type}
                                    onChange={e => setAchievementForm({ ...achievementForm, type: e.target.value as Achievement['type'] })}
                                >
                                    <option value="award">Награда</option>
                                    <option value="certificate">Сертификат</option>
                                    <option value="competition">Конкурс</option>
                                </select>
                                <label>Дата</label>
                                <input
                                    type="date"
                                    value={achievementForm.date}
                                    onChange={e => setAchievementForm({ ...achievementForm, date: e.target.value })}
                                />
                                <label>Организация</label>
                                <input
                                    type="text"
                                    value={achievementForm.organization || ''}
                                    onChange={e => setAchievementForm({ ...achievementForm, organization: e.target.value })}
                                />
                                <label>Описание</label>
                                <textarea
                                    value={achievementForm.description || ''}
                                    onChange={e => setAchievementForm({ ...achievementForm, description: e.target.value })}
                                />
                            </div>
                        )}

                        {activeTab === 'contacts' && (
                            <div className="form-group">
                                <label>Тип</label>
                                <select
                                    value={contactForm.type}
                                    onChange={e => setContactForm({ ...contactForm, type: e.target.value as Contact['type'] })}
                                >
                                    <option value="email">Email</option>
                                    <option value="github">GitHub</option>
                                    <option value="telegram">Telegram</option>
                                    <option value="phone">Phone</option>
                                    <option value="linkedin">LinkedIn</option>
                                    <option value="other">Other</option>
                                </select>
                                <label>Значение</label>
                                <input
                                    type="text"
                                    value={contactForm.value}
                                    onChange={e => setContactForm({ ...contactForm, value: e.target.value })}
                                />
                            </div>
                        )}

                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={closeModal}>Отмена</button>
                            <button
                                className="btn-submit"
                                onClick={
                                    modalType === 'create'
                                        ? activeTab === 'projects' ? handleCreateProject
                                        : activeTab === 'skills' ? handleCreateSkill
                                        : activeTab === 'achievements' ? handleCreateAchievement
                                        : handleCreateContact
                                        : activeTab === 'projects' ? handleUpdateProject
                                        : activeTab === 'skills' ? handleUpdateSkill
                                        : activeTab === 'achievements' ? handleUpdateAchievement
                                        : handleUpdateContact
                                }
                            >
                                {modalType === 'create' ? 'Создать' : 'Сохранить'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Admin
