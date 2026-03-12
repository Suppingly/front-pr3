import React, { useEffect, useRef, useCallback } from 'react';

interface SkillData {
  id: string;
  label: string;
  zone: 'frontend' | 'backend' | 'gamedev' | 'mobile' | 'other';
  color: string;
}

interface Particle extends SkillData {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  zoneCenterX: number;
  zoneCenterY: number;
  zoneRadius: number;
  isStar?: boolean;
}

const SKILLS_DATA: SkillData[] = [
  // Frontend
  { id: 'skill-js', label: 'JavaScript', zone: 'frontend', color: '#f7df1e' },
  { id: 'skill-react', label: 'React', zone: 'frontend', color: '#61dafb' },
  { id: 'skill-css', label: 'CSS', zone: 'frontend', color: '#264de4' },
  { id: 'skill-next', label: 'Next.js', zone: 'frontend', color: '#ffffff' },
  { id: 'skill-twcss', label: 'Tailwind CSS', zone: 'frontend', color:'#27ebb3' },

  // Backend
  { id: 'skill-python', label: 'Python', zone: 'backend', color: '#3776ab' },
  { id: 'skill-node', label: 'Node.js', zone: 'backend', color: '#339933' },
  { id: 'skill-pg', label: 'PostgreSQL', zone: 'backend', color: '#003b57' },
  { id: 'skill-ts', label: 'TS/JS', zone: 'backend', color: '#3178c6' },

  // Game Dev
  { id: 'skill-unity', label: 'Unity/C#', zone: 'gamedev', color: '#ffffff' },
  { id: 'skill-unreal', label: 'Unreal/C++', zone: 'gamedev', color: '#000000' },
  { id: 'skill-java-g', label: 'Java', zone: 'gamedev', color: '#f89820' },

  // Mobile
  { id: 'skill-java-m', label: 'Java', zone: 'mobile', color: '#f89820' },
  { id: 'skill-kotlin', label: 'Kotlin', zone: 'mobile', color: '#7f52ff' },

  // Other
  { id: 'skill-cpp', label: 'C++', zone: 'other', color: '#00599c' },
  { id: 'skill-git', label: 'Git CI/CD', zone: 'other', color: '#f05032' },
];

const ConstellationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const isInitializedRef = useRef(false);

  // Конфигурация зон (в процентах от размера экрана)
  const ZONE_CONFIG = {
    frontend: { x: 0.3, y: 0.3, radius: 140, color: 'rgba(97, 218, 251, 0.3)' },
    backend: { x: 0.7, y: 0.3, radius: 140, color: 'rgba(51, 153, 51, 0.3)' },
    gamedev: { x: 0.15, y: 0.7, radius: 140, color: 'rgba(242, 2, 255, 0.3)' },
    mobile: { x: 0.85, y: 0.7, radius: 140, color: 'rgba(248, 152, 32, 0.3)' },
    other: { x: 0.5, y: 0.7, radius: 140, color: 'rgba(240, 80, 50, 0.3)' },
  };

  const initParticles = useCallback((width: number, height: number) => {
    if (width <= 0 || height <= 0) return;

    const particles: Particle[] = [];

    SKILLS_DATA.forEach((skill) => {
      const zone = ZONE_CONFIG[skill.zone];
      // Случайная позиция внутри зоны
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * zone.radius * 0.6;

      particles.push({
        ...skill,
        x: zone.x * width + Math.cos(angle) * r,
        y: zone.y * height + Math.sin(angle) * r,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 5,
        zoneCenterX: zone.x * width,
        zoneCenterY: zone.y * height,
        zoneRadius: zone.radius,
      });
    });

    // Фоновые звезды
    for (let i = 0; i < 40; i++) {
      particles.push({
        id: '',
        label: '',
        zone: 'other',
        color: '#ffffff',
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.5,
        zoneCenterX: 0,
        zoneCenterY: 0,
        zoneRadius: 0,
        isStar: true,
      } as Particle);
    }

    particlesRef.current = particles;
    isInitializedRef.current = true;
  }, []);

  // Ограничение частицы внутри зоны
  const constrainToZone = (p: Particle, width: number, height: number) => {
    if (p.isStar) {
      p.x += p.vx;
      p.y += p.vy;
      // Звезды отскакивают от границ экрана
      if (p.x <= 0 || p.x >= width) p.vx *= -1;
      if (p.y <= 0 || p.y >= height) p.vy *= -1;
      return;
    }

    const dx = p.x - p.zoneCenterX;
    const dy = p.y - p.zoneCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Если частица выходит за пределы зоны (90% радиуса для плавности)
    if (distance > p.zoneRadius * 0.9) {
      // Вектор к центру
      const angle = Math.atan2(dy, dx);
      // Возвращаем внутрь
      const targetX = p.zoneCenterX + Math.cos(angle) * p.zoneRadius * 0.85;
      const targetY = p.zoneCenterY + Math.sin(angle) * p.zoneRadius * 0.85;
      
      // Плавное смещение к центру + небольшое случайное движение
      p.x += (targetX - p.x) * 0.05 + (Math.random() - 0.5) * 0.5;
      p.y += (targetY - p.y) * 0.05 + (Math.random() - 0.5) * 0.5;
      
      // Разворачиваем скорость
      p.vx *= -0.5;
      p.vy *= -0.5;
    } else {
      // Обычное движение внутри зоны
      p.x += p.vx;
      p.y += p.vy;
    }
  };

  const drawZones = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    Object.entries(ZONE_CONFIG).forEach(([key, zone]) => {
      const centerX = zone.x * width;
      const centerY = zone.y * height;

      // Фон зоны
      ctx.fillStyle = zone.color.replace('0.3', '0.05')
      ctx.beginPath();
      ctx.arc(centerX, centerY, zone.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = zone.color
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Текст зоны
      ctx.fillStyle = zone.color;
      const labelMap: Record<string, string> = {
        frontend: 'FRONTEND',
        backend: 'BACKEND',
        gamedev: 'GAME DEV',
        mobile: 'MOBILE',
        other: 'OTHER',
      };
      ctx.fillText(labelMap[key], centerX, centerY + zone.radius + 25);
    });
  };

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const particles = particlesRef.current;

    ctx.clearRect(0, 0, width, height);
    drawZones(ctx, width, height);

    // Линии между частицами
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(100, 149, 237, ${1 - distance / 120})`;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    // Обновление и отрисовка частиц
    particles.forEach((p) => {
      constrainToZone(p, width, height);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      
      // Обводка для темных цветов
      if (p.color === '#000000') {
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      if (p.label) {
        ctx.font = 'bold 12px sans-serif';
        ctx.fillStyle = '#e0e6ed';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 4;
        ctx.fillText(p.label, p.x + 10, p.y - 10);
        ctx.shadowBlur = 0;
      }
    });

    requestRef.current = requestAnimationFrame(animate);
  }, []);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const clickedParticle = particlesRef.current.find(p => {
      if (p.isStar) return false;
      const dx = clickX - p.x;
      const dy = clickY - p.y;
      return Math.sqrt(dx * dx + dy * dy) < 25;
    });

    if (clickedParticle && clickedParticle.id) {
      scrollToSkill(clickedParticle.id);
    }
  };

  const scrollToSkill = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const originalBg = element.style.backgroundColor;
      element.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
      setTimeout(() => {
        element.style.backgroundColor = originalBg;
      }, 2000);
    }
  };

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const width = parent.offsetWidth;
    const height = parent.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    if (width > 0 && height > 0) {
      initParticles(width, height);
    }
  }, [initParticles]);

  useEffect(() => {
    setupCanvas();
    animate();

    const handleResize = () => {
      setupCanvas();
    };
    window.addEventListener('resize', handleResize);

    const timeoutId = setTimeout(() => {
      if (!isInitializedRef.current) {
        setupCanvas();
      }
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [setupCanvas, animate]);

  return (
    <div style={{
      position: 'relative',
      height: '90vh',
      width: '100%',
      background: 'radial-gradient(circle at center, #161b2e 0%, #0b0d17 100%)',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      cursor: 'pointer',
      borderRadius: '50px'
    }}>
      <div style={{
        position: 'absolute', 
        top: '20px', 
        left: '20px', 
        zIndex: 10, 
        pointerEvents: 'none'
      }}>
        <h2 style={{ color: '#fff', margin: 0, fontSize: '1.5rem' }}>Карта Навыков</h2>
        <p style={{ color: '#aaa', fontSize: '0.9rem', margin: '5px 0 0 0' }}>
          Нажмите на навык для перехода к таблице
        </p>
      </div>
      <canvas 
        ref={canvasRef} 
        onClick={handleCanvasClick}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ConstellationCanvas;