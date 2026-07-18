import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { Github, Linkedin, Globe, User, X, Terminal, Code, Command } from 'lucide-react';

type ShellType = 'git' | 'bash' | 'cmd';

export default function Footer() {
  const { t } = useTranslation();
  const [showAbout, setShowAbout] = useState(false);
  const [activeShell, setActiveShell] = useState<ShellType>('git');
  const [terminalHistory, setTerminalHistory] = useState<Array<{type: 'input' | 'success' | 'error' | 'info', text: string}>>([
    { type: 'info', text: '> Selecione um shell: git, bash ou cmd' },
    { type: 'info', text: '> Digite "help" para ver os comandos disponíveis.' },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const gitCommands: Record<string, { response: string; type: 'success' | 'error' }> = {
    'help': { 
      response: 'Git: status, log, branch, checkout, pull, push, commit, merge, stash, diff, remote, clone', 
      type: 'success' 
    },
    'status': { 
      response: 'On branch main\nnothing to commit, working tree clean', 
      type: 'success' 
    },
    'log': { 
      response: 'a3f2c1d (HEAD -> main) feat: add Módulo 09 Forense Digital\nb8e4a2f feat: add Módulo 08 Threat Intel\nc1d5f3e feat: add footer interativo\ne5g7h8i fix: responsive improvements', 
      type: 'success' 
    },
    'branch': { 
      response: '* main\n  feature/threat-intel\n  feature/forensics\n  develop', 
      type: 'success' 
    },
    'checkout main': { 
      response: '✓ Switched to branch \'main\'', 
      type: 'success' 
    },
    'checkout -b': { 
      response: '✓ Switched to a new branch \'feature/nova-feature\'', 
      type: 'success' 
    },
    'pull': { 
      response: '✓ Already up to date.', 
      type: 'success' 
    },
    'push': { 
      response: '✓ Push para origin/main bem-sucedido.\nEnumerando objetos: 5, pronto.\nTotal 3 (delta 2), reusados 0 (delta 0)', 
      type: 'success' 
    },
    'commit': { 
      response: '✗ Nothing to commit. Use "git status" para verificar.', 
      type: 'error' 
    },
    'merge': { 
      response: '✓ Merge branch \'feature/nova-feature\' into main\nUpdating c1d5f3e..a3f2c1d\nFast-forward', 
      type: 'success' 
    },
    'stash': { 
      response: '✓ Saved working directory and index state\nHEAD is now at c1d5f3e feat: add footer interativo', 
      type: 'success' 
    },
    'stash pop': { 
      response: '✓ On branch main\nChanges not staged for commit:\n  modified:   src/components/Footer.tsx', 
      type: 'success' 
    },
    'diff': { 
      response: 'diff --git a/src/components/Footer.tsx\n+ new feature added\n- old code removed', 
      type: 'success' 
    },
    'remote -v': { 
      response: 'origin\thttps://github.com/manoelja/cyberdata.git (fetch)\norigin\thttps://github.com/manoelja/cyberdata.git (push)', 
      type: 'success' 
    },
    'clone': { 
      response: '✓ Cloning into \'cyberdata\'...\nremote: Enumerating objects: 156, done.\nReceiving objects: 100% (156/156), 2.4 MiB | 1.2 MiB/s, done.', 
      type: 'success' 
    },
    'fetch': { 
      response: '✓ remote: Enumerating objects: 5, done.\nFrom https://github.com/manoelja/cyberdata\n   c1d5f3e..a3f2c1d  main -> origin/main', 
      type: 'success' 
    },
    'reset': { 
      response: '✓ HEAD is now at c1d5f3e feat: add footer interativo', 
      type: 'success' 
    },
    'rebase': { 
      response: '✓ Successfully rebased and updated refs/heads/main.', 
      type: 'success' 
    },
  };

  const bashCommands: Record<string, { response: string; type: 'success' | 'error' }> = {
    'help': { 
      response: 'Bash: ls, cd, pwd, mkdir, rm, cp, mv, cat, echo, grep, chmod, whoami, date, clear', 
      type: 'success' 
    },
    'ls': { 
      response: 'src/  public/  package.json  README.md  vite.config.ts  tsconfig.json', 
      type: 'success' 
    },
    'ls -la': { 
      response: 'drwxr-xr-x  8 manoel  staff  256 Jul 18 10:30 .\ndrwxr-xr-x  5 manoel  staff  160 Jul 18 09:15 ..\n-rw-r--r--  1 manoel  staff  456 Jul 18 10:30 package.json\ndrwxr-xr-x  4 manoel  staff  128 Jul 18 10:30 src/', 
      type: 'success' 
    },
    'cd': { 
      response: '✓ Diretório atual: /home/manoel/cyberdata', 
      type: 'success' 
    },
    'pwd': { 
      response: '/home/manoel/cyberdata', 
      type: 'success' 
    },
    'mkdir': { 
      response: '✓ Diretório criado com sucesso.', 
      type: 'success' 
    },
    'rm': { 
      response: '✗ Operação requer confirmação. Use "rm -rf" para forçar.', 
      type: 'error' 
    },
    'cp': { 
      response: '✓ Arquivo copiado com sucesso.', 
      type: 'success' 
    },
    'mv': { 
      response: '✓ Arquivo movido com sucesso.', 
      type: 'success' 
    },
    'cat': { 
      response: 'cyber-data-security\nvite.config.ts\ntsconfig.json', 
      type: 'success' 
    },
    'echo': { 
      response: 'Hello from Cyber Data Security!', 
      type: 'success' 
    },
    'grep': { 
      response: 'src/components/Footer.tsx: matches found', 
      type: 'success' 
    },
    'chmod': { 
      response: '✓ Permissões alteradas com sucesso.', 
      type: 'success' 
    },
    'whoami': { 
      response: 'manoel', 
      type: 'success' 
    },
    'date': { 
      response: new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' }), 
      type: 'success' 
    },
    'clear': { 
      response: 'CLEAR', 
      type: 'success' 
    },
    'sudo': { 
      response: '✗ [sudo] password for manoel: Sorry, try again.', 
      type: 'error' 
    },
    'rm -rf': { 
      response: '✗ rm: cannot remove \'/\': Permission denied', 
      type: 'error' 
    },
  };

  const cmdCommands: Record<string, { response: string; type: 'success' | 'error' }> = {
    'help': { 
      response: 'CMD: dir, cd, mkdir, rmdir, copy, move, type, echo, find, cls, ver, whoami, date, systeminfo', 
      type: 'success' 
    },
    'dir': { 
      response: ' Volume in drive C is OS\n Directory of C:\\Users\\Manoel\\cyberdata\n\n18/07/2026  10:30    <DIR>          src\n18/07/2026  09:15    <DIR>          public\n18/07/2026  10:30           456 package.json', 
      type: 'success' 
    },
    'cd': { 
      response: 'C:\\Users\\Manoel\\cyberdata', 
      type: 'success' 
    },
    'mkdir': { 
      response: '✓ Diretório criado.', 
      type: 'success' 
    },
    'rmdir': { 
      response: '✓ Diretório removido.', 
      type: 'success' 
    },
    'copy': { 
      response: '        1 arquivo(s) copiado(s).', 
      type: 'success' 
    },
    'move': { 
      response: '        1 arquivo(s) movido(s).', 
      type: 'success' 
    },
    'type': { 
      response: 'cyber-data-security\nvite.config.ts\ntsconfig.json', 
      type: 'success' 
    },
    'echo': { 
      response: 'Hello from Cyber Data Security!', 
      type: 'success' 
    },
    'find': { 
      response: 'C:\\Users\\Manoel\\cyberdata\\src\nC:\\Users\\Manoel\\cyberdata\\public', 
      type: 'success' 
    },
    'cls': { 
      response: 'CLEAR', 
      type: 'success' 
    },
    'ver': { 
      response: 'Microsoft Windows [Versão 10.0.22631.3880]', 
      type: 'success' 
    },
    'whoami': { 
      response: 'desktop-manoel\\manoel', 
      type: 'success' 
    },
    'date': { 
      response: new Date().toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' }), 
      type: 'success' 
    },
    'systeminfo': { 
      response: 'Nome do Sistema Operacional: Windows 11\nVersão: 10.0.22631\nProcessador: Intel Core i7\nRAM: 16 GB', 
      type: 'success' 
    },
    'tasklist': { 
      response: 'chrome.exe                    1234 Console    1  145,672 K\nnode.exe                      5678 Console    1   89,234 K\ncode.exe                      9012 Console    1  234,567 K', 
      type: 'success' 
    },
    'ipconfig': { 
      response: 'Adaptador Ethernet Ethernet:\n   IPv4. . . . . . . . . . . : 192.168.1.100\n   Máscara de Sub-rede . . . : 255.255.255.0', 
      type: 'success' 
    },
    'sudo': { 
      response: '✗ \'sudo\' não é reconhecido como comando interno ou externo.', 
      type: 'error' 
    },
  };

  const getCommands = () => {
    switch (activeShell) {
      case 'git': return gitCommands;
      case 'bash': return bashCommands;
      case 'cmd': return cmdCommands;
      default: return gitCommands;
    }
  };

  const getPrompt = () => {
    switch (activeShell) {
      case 'git': return 'git > ';
      case 'bash': return 'bash $ ';
      case 'cmd': return 'C:\\> ';
      default: return '> ';
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  useEffect(() => {
    if (!isProcessing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isProcessing, terminalHistory]);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const commands = getCommands();
    
    setTerminalHistory(prev => [...prev, { type: 'input', text: `${getPrompt()}${cmd}` }]);
    
    if (trimmedCmd === 'clear' || trimmedCmd === 'cls') {
      setTerminalHistory([]);
      setCurrentInput('');
      setTimeout(() => inputRef.current?.focus(), 50);
      return;
    }

    setIsProcessing(true);
    
    setTimeout(() => {
      const command = commands[trimmedCmd];
      
      if (command) {
        const lines = command.response.split('\n');
        lines.forEach((line, index) => {
          setTimeout(() => {
            setTerminalHistory(prev => [...prev, { type: command.type, text: line }]);
          }, index * 80);
        });
      } else {
        setTerminalHistory(prev => [...prev, { 
          type: 'error', 
          text: `✗ Comando não encontrado: "${cmd}". Digite "help" para ajuda.` 
        }]);
      }
      
      setIsProcessing(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }, 200);
    
    setCurrentInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim() && !isProcessing) {
      handleCommand(currentInput);
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const switchShell = (shell: ShellType) => {
    setActiveShell(shell);
    setTerminalHistory([
      { type: 'info', text: `> Shell alterado para: ${shell.toUpperCase()}` },
      { type: 'info', text: '> Digite "help" para ver os comandos disponíveis.' },
    ]);
    setCurrentInput('');
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="footer-title">{t('footer.title')}</h2>
            <p className="footer-desc">
              {t('footer.description')}
            </p>

            <p className="footer-author-credit">Desenvolvido por Manoel — Data Scientist</p>

            <div className="footer-social-icons">
              <motion.a
                href="https://github.com/manoelja"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-soft)', borderColor: 'var(--accent-color)' }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/manoel-ara%C3%BAjo-79b62239b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-soft)', borderColor: 'var(--accent-color)' }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/manoelja/cyberdata"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-soft)', borderColor: 'var(--accent-color)' }}
              >
                <Globe size={20} />
              </motion.a>
              <motion.button
                className="social-icon-btn"
                onClick={() => setShowAbout(!showAbout)}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-soft)', borderColor: 'var(--accent-color)' }}
              >
                <User size={20} />
              </motion.button>
            </div>

            <AnimatePresence>
              {showAbout && (
                <motion.div
                  className="developer-about-card"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="developer-about-header">
                    <h4>Sobre o Desenvolvedor</h4>
                    <button className="close-about-btn" onClick={() => setShowAbout(false)}>
                      <X size={16} />
                    </button>
                  </div>
                  <p className="developer-about-text">
                    Sou Data Scientist apaixonado por transformar dados em inteligência e democratizar o conhecimento técnico. Criei esta plataforma para compartilhar aprendizado e contribuir com a comunidade brasileira de tecnologia.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="footer-terminal"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <span className="terminal-label">SECURE_CHANNEL.SH</span>
            </div>

            <div className="shell-selector">
              <button 
                className={`shell-btn ${activeShell === 'git' ? 'active' : ''}`}
                onClick={() => switchShell('git')}
              >
                <Command size={14} /> Git
              </button>
              <button 
                className={`shell-btn ${activeShell === 'bash' ? 'active' : ''}`}
                onClick={() => switchShell('bash')}
              >
                <Terminal size={14} /> Bash
              </button>
              <button 
                className={`shell-btn ${activeShell === 'cmd' ? 'active' : ''}`}
                onClick={() => switchShell('cmd')}
              >
                <Code size={14} /> CMD
              </button>
            </div>

            <div className="terminal-content" ref={terminalRef} onClick={focusInput}>
              {terminalHistory.map((line, index) => (
                <div key={index} className={`terminal-line terminal-${line.type}`}>
                  {line.text}
                </div>
              ))}
              <div className="terminal-input-line">
                <span className="terminal-prompt">{getPrompt()}</span>
                <input
                  ref={inputRef}
                  type="text"
                  className="terminal-input"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isProcessing}
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                  placeholder={isProcessing ? 'processando...' : 'digite um comando...'}
                />
                {!isProcessing && <span className="terminal-cursor"></span>}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content container">
          <p className="footer-copyright-text">© 2026 DS.Manoel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
