import { useEffect, useRef, useCallback } from "react";

interface SkillData {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  area?: 'frontend' | 'backend' | 'devops';
}

interface Particle extends SkillData {
  vx: number;
  vy: number;
  radius: number;
  isStar?: boolean;
}

const SKILLS_DATA: SkillData[] = [
  { id: 'skill-js', label: 'JS', x: 0.25, y: 0.3, color: '#f7df1e', area: 'frontend' },
  { id: 'skill-react', label: 'React', x: 0.35, y: 0.4, color: '#61dafb', area: 'frontend' },
  { id: 'skill-css', label: 'CSS', x: 0.2, y: 0.55, color: '#264de4', area: 'frontend' },
  { id: 'skill-node', label: 'Node.js', x: 0.7, y: 0.3, color: '#339933', area: 'backend' },
  { id: 'skill-python', label: 'Python', x: 0.6, y: 0.5, color: '#3776ab', area: 'backend' },
  { id: 'skill-sql', label: 'SQL', x: 0.8, y: 0.65, color: '#003b57', area: 'backend' },
  { id: 'skill-go', label: 'Go', x: 0.75, y: 0.2, color: '#00add8', area: 'backend' },
  { id: 'skill-docker', label: 'Docker', x: 0.4, y: 0.75, color: '#2496ed', area: 'devops' },
  { id: 'skill-git', label: 'Git', x: 0.5, y: 0.15, color: '#f05032', area: 'devops' },
];

const ConstellationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const isInitializedRef = useRef(false);

  const initParticles = useCallback((width: number, height: number) => {
    // Защита от инициализации с нулевыми размерами
    if (width <= 0 || height <= 0) return;

    const particles: Particle[] = [];

    SKILLS_DATA.forEach((skill) => {
      particles.push({
        ...skill,
        x: skill.x * width,
        y: skill.y * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 6,
      });
    });

    for (let i = 0; i < 30; i++) {
      particles.push({
        id: '', label: '', x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.5, color: '#ffffff', isStar: true
      } as Particle);
    }
    particlesRef.current = particles;
    isInitializedRef.current = true;
  }, []);

  const drawZones = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Frontend
    ctx.fillStyle = 'rgba(97, 218, 251, 0.05)';
    ctx.beginPath();
    ctx.arc(width * 0.25, height * 0.4, 150, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(97, 218, 251, 0.3)';
    ctx.fillText('FRONTEND', width * 0.25, height * 0.7);

    // Backend
    ctx.fillStyle = 'rgba(51, 153, 51, 0.05)';
    ctx.beginPath();
    ctx.arc(width * 0.7, height * 0.4, 150, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(51, 153, 51, 0.3)';
    ctx.fillText('BACKEND', width * 0.7, height * 0.7);

    // DevOps
    ctx.fillStyle = 'rgba(240, 80, 50, 0.05)';
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.8, 200, 100, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(240, 80, 50, 0.3)';
    ctx.fillText('DEVOPS & TOOLS', width * 0.5, height * 0.9);
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

    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(100, 149, 237, ${1 - distance / 150})`;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x <= 0 || p.x >= width) p.vx *= -1;
      if (p.y <= 0 || p.y >= height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      if (p.label) {
        ctx.font = 'bold 14px sans-serif';
        ctx.fillStyle = '#e0e6ed';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 4;
        ctx.fillText(p.label, p.x + 12, p.y - 12);
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
      return Math.sqrt(dx * dx + dy * dy) < 30;
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

    // Устанавливаем размеры canvas
    canvas.width = width;
    canvas.height = height;

    // Инициализируем частицы только если размеры валидны
    if (width > 0 && height > 0) {
      initParticles(width, height);
    }
  }, [initParticles]);

  useEffect(() => {
    // Первоначальная настройка
    setupCanvas();
    animate();

    // Обработчик ресайза
    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener('resize', handleResize);

    // Дополнительная проверка через setTimeout на случай если DOM еще не готов
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
      height: '60vh',
      width: '100%',
      background: 'radial-gradient(circle at center, #161b2e 0%, #0b0d17 100%)',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      cursor: 'pointer'
    }}>
      <div style={{
        position: 'absolute', top: '20px', left: '20px', zIndex: 10, pointerEvents: 'none'
      }}>
        <h2 style={{ color: '#fff', margin: 0, fontSize: '1.5rem' }}>Интерактивная карта</h2>
        <p style={{ color: '#aaa', fontSize: '0.9rem', margin: '5px 0 0 0' }}>Нажмите на навык, чтобы найти его в таблице</p>
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