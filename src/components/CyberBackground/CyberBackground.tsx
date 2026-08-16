import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './CyberBackground.css';

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 5000], [0, -200]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let lastFrameTime = 0;
    const TARGET_FPS = 20;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;

    // Configurações da "Chuva Digital"
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];
    const characters = "01010101ABCDEF"; // Binário + Hex para tema de segurança

    const mouse = { x: -1000, y: -1000 };

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // Começar fora da tela em alturas diferentes
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
      if (isVisible) {
        // Zera o controle de frame para desenhar IMEDIATAMENTE ao voltar
        // do segundo plano (sem esperar o próximo intervalo de FPS).
        lastFrameTime = 0;
      }
    };

    const draw = (timestamp: number) => {
      if (!ctx || !canvas) return;

      animationFrameId = requestAnimationFrame(draw);

      if (!isVisible) return;
      if (timestamp - lastFrameTime < FRAME_INTERVAL) return;
      lastFrameTime = timestamp;

      const isLightTheme = document.documentElement.classList.contains('light-theme');

      // Efeito de rastro
      ctx.fillStyle = isLightTheme ? 'rgba(245, 247, 250, 0.15)' : 'rgba(3, 3, 3, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      // Desativar shadowBlur para evitar artefatos de "flash" e melhorar performance
      ctx.shadowBlur = 0;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.fillStyle = isLightTheme ? '#d32f2f' : '#ffffff';
        } else {
          const alpha = Math.random() * 0.3 + 0.1;
          ctx.fillStyle = isLightTheme ? `rgba(211, 47, 47, ${alpha})` : `rgba(255, 49, 49, ${alpha})`;
        }

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.985) {
          drops[i] = 0;
        }

        drops[i] += 0.4;
      }
    };

    init();
    animationFrameId = requestAnimationFrame(draw);

    document.addEventListener('visibilitychange', handleVisibility);
    // pageshow + focus: cobrem a restauração via bfcache e o retorno pelo
    // alternador de apps, quando visibilitychange pode não disparar.
    window.addEventListener('pageshow', handleVisibility);
    window.addEventListener('focus', handleVisibility);
    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pageshow', handleVisibility);
      window.removeEventListener('focus', handleVisibility);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div 
      className="cyber-background"
      style={{ y: parallaxY }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <canvas ref={canvasRef} className="cyber-canvas" />
      <div className="cyber-overlay"></div>
    </motion.div>
  );
};

export default CyberBackground;
