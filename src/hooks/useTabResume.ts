import { useEffect, useRef } from 'react';

/**
 * Reage ao retorno do app do segundo plano (mobile).
 *
 * Problema: no Chrome/Android, quando a aba fica em segundo plano e é
 * restaurada (inclusive via bfcache), o compositor pode retomar a página
 * com camadas corrompidas: fontes webfont "estranhas", gradientes com
 * `background-clip: text` errados e animações que parecem congeladas.
 *
 * Este hook:
 * 1. Chama `onResume()` quando a aba volta a ficar visível
 *    (visibilitychange + pageshow + focus — cobre bfcache e o retorno
 *    via alternador de apps).
 * 2. Força um repaint/reflow global para o navegador recompor o texto e
 *    as camadas (nudge de `opacity` não afeta layout nem elementos fixed).
 */
export const useTabResume = (onResume?: () => void) => {
  const onResumeRef = useRef(onResume);
  onResumeRef.current = onResume;

  useEffect(() => {
    const handleVisible = () => {
      if (document.visibilityState === 'hidden') return;

      onResumeRef.current?.();

      // Repaint forçado: corrige fontes e camadas compostas corrompidas
      // após a aba voltar do segundo plano no mobile.
      document.body.style.opacity = '0.999';
      document.body.getBoundingClientRect();
      document.body.style.opacity = '';
    };

    document.addEventListener('visibilitychange', handleVisible);
    window.addEventListener('pageshow', handleVisible);
    window.addEventListener('focus', handleVisible);

    return () => {
      document.removeEventListener('visibilitychange', handleVisible);
      window.removeEventListener('pageshow', handleVisible);
      window.removeEventListener('focus', handleVisible);
    };
  }, []);
};
