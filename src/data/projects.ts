export interface Project {
  id: number;
  title: Record<string, string>;
  category: Record<string, string>;
  description: Record<string, string>;
  problem: Record<string, string>;
  solution: Record<string, string>;
  result: Record<string, string>;
  tags: string[];
  githubUrl: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      pt: "Módulo 01: O Ciclo de Vida do Dado",
      en: "Module 01: The Data Life Cycle"
    },
    category: {
      pt: "Ciência de Dados",
      en: "Data Science"
    },
    description: {
      pt: "Entendendo como a informação é coletada, processada e protegida desde sua origem até o descarte seguro.",
      en: "Understanding how information is collected, processed, and protected from origin to secure disposal."
    },
    problem: {
      pt: "O risco de vazamento em cada etapa do processamento de dados massivos.",
      en: "The risk of leakage at each stage of massive data processing."
    },
    solution: {
      pt: "Estudo sobre protocolos de governança de dados e higienização de informações sensíveis.",
      en: "Study on data governance protocols and sanitization of sensitive information."
    },
    result: {
      pt: "Compreensão total da cadeia de custódia da informação digital.",
      en: "Total understanding of the digital information chain of custody."
    },
    tags: ["Data Governance", "Privacy", "Storage"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 2,
    title: {
      pt: "Módulo 02: IA na Detecção de Intrusos",
      en: "Module 02: AI in Intrusion Detection"
    },
    category: {
      pt: "Inteligência Artificial",
      en: "Artificial Intelligence"
    },
    description: {
      pt: "Pesquisa sobre como algoritmos de Machine Learning identificam ataques de Dia Zero através de anomalias estatísticas.",
      en: "Research on how Machine Learning algorithms identify Zero Day attacks through statistical anomalies."
    },
    problem: {
      pt: "Ataques modernos são rápidos demais para serem detectados por assinaturas tradicionais.",
      en: "Modern attacks are too fast to be detected by traditional signatures."
    },
    solution: {
      pt: "Implementação de modelos de Isolation Forest para detectar comportamentos de rede fora do padrão.",
      en: "Implementation of Isolation Forest models to detect non-standard network behavior."
    },
    result: {
      pt: "Detecção proativa sem a necessidade de conhecimento prévio da ameaça.",
      en: "Proactive detection without prior knowledge of the threat."
    },
    tags: ["Machine Learning", "Cyber Defense", "Anomaly"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 3,
    title: {
      pt: "Módulo 03: A Matemática do Sigilo",
      en: "Module 03: The Math of Secrecy"
    },
    category: {
      pt: "Criptografia",
      en: "Cryptography"
    },
    description: {
      pt: "Exploração dos fundamentos matemáticos que tornam a criptografia moderna a base da confiança na internet.",
      en: "Exploration of the mathematical foundations that make modern cryptography the basis of trust on the internet."
    },
    problem: {
      pt: "A ameaça iminente da computação quântica aos algoritmos de criptografia atuais.",
      en: "The imminent threat of quantum computing to current encryption algorithms."
    },
    solution: {
      pt: "Estudo de criptografia pós-quântica baseada em reticulados (Lattice-based).",
      en: "Study of post-quantum cryptography based on lattices."
    },
    result: {
      pt: "Conhecimento sobre o futuro da privacidade em um mundo pós-clássico.",
      en: "Knowledge about the future of privacy in a post-classical world."
    },
    tags: ["Cryptography", "Quantum", "Mathematics"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 4,
    title: {
      pt: "Módulo 04: Resiliência em Nuvem",
      en: "Module 04: Cloud Resilience"
    },
    category: {
      pt: "Infraestrutura",
      en: "Infrastructure"
    },
    description: {
      pt: "Como arquiteturas distribuídas garantem a disponibilidade de dados mesmo sob ataques massivos (DDoS).",
      en: "How distributed architectures ensure data availability even under massive attacks (DDoS)."
    },
    problem: {
      pt: "Dependência de pontos únicos de falha em arquiteturas centralizadas.",
      en: "Dependence on single points of failure in centralized architectures."
    },
    solution: {
      pt: "Pesquisa em redes Auto-Healing e redundância geográfica inteligente.",
      en: "Research on Auto-Healing networks and intelligent geographic redundancy."
    },
    result: {
      pt: "Estratégias para manter sistemas online sob as condições mais adversas.",
      en: "Strategies to keep systems online under the most adverse conditions."
    },
    tags: ["Cloud Security", "Availability", "Networking"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 5,
    title: {
      pt: "Módulo 05: Engenharia de Privacidade",
      en: "Module 05: Privacy Engineering"
    },
    category: {
      pt: "Privacidade",
      en: "Privacy"
    },
    description: {
      pt: "O estudo de como construir sistemas que protegem a identidade por design (Privacy by Design).",
      en: "The study of how to build systems that protect identity by design (Privacy by Design)."
    },
    problem: {
      pt: "Sistemas projetados sem considerar a privacidade como requisito fundamental.",
      en: "Systems designed without considering privacy as a fundamental requirement."
    },
    solution: {
      pt: "Implementação de técnicas de Diferencial Privacy e K-Anonymity.",
      en: "Implementation of Differential Privacy and K-Anonymity techniques."
    },
    result: {
      pt: "Proteção da identidade do usuário sem comprometer a utilidade analítica dos dados.",
      en: "User identity protection without compromising the analytical utility of the data."
    },
    tags: ["Privacy", "Compliance", "Ethics"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 6,
    title: {
      pt: "Módulo 06: Biometria Comportamental",
      en: "Module 06: Behavioral Biometrics"
    },
    category: {
      pt: "Autenticação",
      en: "Authentication"
    },
    description: {
      pt: "Como a análise de padrões de digitação e movimento do mouse pode substituir senhas tradicionais.",
      en: "How typing patterns and mouse movement analysis can replace traditional passwords."
    },
    problem: {
      pt: "Senhas tradicionais são facilmente roubadas através de phishing ou força bruta.",
      en: "Traditional passwords are easily stolen through phishing or brute force."
    },
    solution: {
      pt: "Uso de Redes Neurais Recorrentes (RNN) para modelar o perfil único de interação do usuário.",
      en: "Use of Recurrent Neural Networks (RNN) to model the user's unique interaction profile."
    },
    result: {
      pt: "Autenticação contínua e invisível, aumentando radicalmente a segurança.",
      en: "Continuous and invisible authentication, radically increasing security."
    },
    tags: ["Biometrics", "Deep Learning", "UX Security"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 7,
    title: {
      pt: "Módulo 07: O Paradoxo da Criptografia",
      en: "Module 07: The Cryptography Paradox"
    },
    category: {
      pt: "Segurança de Dados",
      en: "Data Security"
    },
    description: {
      pt: "Explicando o equilíbrio entre o sigilo absoluto e a necessidade de governança em um mundo regulado.",
      en: "Explaining the balance between absolute secrecy and the need for governance in a regulated world."
    },
    problem: {
      pt: "O conflito entre a criptografia ponta-a-ponta e as leis de acesso à informação.",
      en: "The conflict between end-to-end encryption and information access laws."
    },
    solution: {
      pt: "Pesquisa em Multi-Party Computation (MPC) e Homomorphic Encryption.",
      en: "Research in Multi-Party Computation (MPC) and Homomorphic Encryption."
    },
    result: {
      pt: "Processamento de dados criptografados sem nunca precisar descriptografá-los.",
      en: "Processing encrypted data without ever needing to decrypt it."
    },
    tags: ["Cryptography", "Law", "Policy"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 8,
    title: {
      pt: "Módulo 08: Inteligência de Ameaças",
      en: "Module 08: Threat Intelligence"
    },
    category: {
      pt: "Cyber Threat Intel",
      en: "Cyber Threat Intel"
    },
    description: {
      pt: "Pesquisa sobre coleta e análise de dados para antecipar movimentos de atacantes e fortalecer defesas proativamente.",
      en: "Research on data collection and analysis to anticipate attacker movements and proactively strengthen defenses."
    },
    problem: {
      pt: "Organizações reagem a ataques depois que eles já causaram danos significativos.",
      en: "Organizations react to attacks after they have already caused significant damage."
    },
    solution: {
      pt: "Análise de indicadores de comprometimento (IOCs) e padrões táticos, técnicos e procedimentais (TTPs).",
      en: "Analysis of indicators of compromise (IOCs) and tactical, technical, and procedural patterns (TTPs)."
    },
    result: {
      pt: "Capacidade de prever e prevenir ataques antes que sejam executados.",
      en: "Ability to predict and prevent attacks before they are executed."
    },
    tags: ["Threat Intel", "OSINT", "Proactive Defense"],
    githubUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 9,
    title: {
      pt: "Módulo 09: Análise Forense Digital",
      en: "Module 09: Digital Forensics"
    },
    category: {
      pt: "Forense Digital",
      en: "Digital Forensics"
    },
    description: {
      pt: "Técnicas de investigação e preservação de evidências digitais para rastrear atacantes e comprovar incidentes.",
      en: "Investigation and digital evidence preservation techniques to track attackers and prove incidents."
    },
    problem: {
      pt: "Atacantes apagam rastros digitais após comprometer sistemas, dificultando a identificação.",
      en: "Attackers erase digital traces after compromising systems, making identification difficult."
    },
    solution: {
      pt: "Metodologias de cadeia de custódia, análise de memória volátil e recuperação de dados deletados.",
      en: "Chain of custody methodologies, volatile memory analysis, and deleted data recovery."
    },
    result: {
      pt: "Rastreamento preciso de atacantes e coleta de provas admissíveis legalmente.",
      en: "Precise attacker tracking and legally admissible evidence collection."
    },
    tags: ["Forensics", "Incident Response", "Evidence"],
    githubUrl: "#",
    caseStudyUrl: "#"
  }
];
