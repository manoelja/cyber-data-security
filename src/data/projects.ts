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

const GITHUB_URL = "https://github.com/manoelja/cyber-data-security";

export const projects: Project[] = [
  {
    id: 1,
    title: {
      pt: "Módulo 01: O Ciclo de Vida do Dado",
      en: "Module 01: The Data Life Cycle",
      es: "Módulo 01: El Ciclo de Vida del Dato"
    },
    category: {
      pt: "Ciência de Dados",
      en: "Data Science",
      es: "Ciencia de Datos"
    },
    description: {
      pt: "Entendendo como a informação é coletada, processada e protegida desde sua origem até o descarte seguro.",
      en: "Understanding how information is collected, processed, and protected from origin to secure disposal.",
      es: "Entendiendo cómo la información se recopila, procesa y protege desde su origen hasta su eliminación segura."
    },
    problem: {
      pt: "O risco de vazamento em cada etapa do processamento de dados massivos.",
      en: "The risk of leakage at each stage of massive data processing.",
      es: "El riesgo de filtración en cada etapa del procesamiento masivo de datos."
    },
    solution: {
      pt: "Estudo sobre protocolos de governança de dados e higienização de informações sensíveis.",
      en: "Study on data governance protocols and sanitization of sensitive information.",
      es: "Estudio sobre protocolos de gobernanza de datos y sanitización de información sensible."
    },
    result: {
      pt: "Compreensão total da cadeia de custódia da informação digital.",
      en: "Total understanding of the digital information chain of custody.",
      es: "Comprensión total de la cadena de custodia de la información digital."
    },
    tags: ["Data Governance", "Privacy", "Storage"],
    githubUrl: GITHUB_URL
  },
  {
    id: 2,
    title: {
      pt: "Módulo 02: IA na Detecção de Intrusos",
      en: "Module 02: AI in Intrusion Detection",
      es: "Módulo 02: IA en la Detección de Intrusiones"
    },
    category: {
      pt: "Inteligência Artificial",
      en: "Artificial Intelligence",
      es: "Inteligencia Artificial"
    },
    description: {
      pt: "Pesquisa sobre como algoritmos de Machine Learning identificam ataques de Dia Zero através de anomalias estatísticas.",
      en: "Research on how Machine Learning algorithms identify Zero Day attacks through statistical anomalies.",
      es: "Investigación sobre cómo los algoritmos de Machine Learning identifican ataques de Día Cero a través de anomalías estadísticas."
    },
    problem: {
      pt: "Ataques modernos são rápidos demais para serem detectados por assinaturas tradicionais.",
      en: "Modern attacks are too fast to be detected by traditional signatures.",
      es: "Los ataques modernos son demasiado rápidos para ser detectados por firmas tradicionales."
    },
    solution: {
      pt: "Implementação de modelos de Isolation Forest para detectar comportamentos de rede fora do padrão.",
      en: "Implementation of Isolation Forest models to detect non-standard network behavior.",
      es: "Implementación de modelos de Isolation Forest para detectar comportamientos de red fuera de estándar."
    },
    result: {
      pt: "Detecção proativa sem a necessidade de conhecimento prévio da ameaça.",
      en: "Proactive detection without prior knowledge of the threat.",
      es: "Detección proactiva sin necesidad de conocimiento previo de la amenaza."
    },
    tags: ["Machine Learning", "Cyber Defense", "Anomaly"],
    githubUrl: GITHUB_URL
  },
  {
    id: 3,
    title: {
      pt: "Módulo 03: A Matemática do Sigilo",
      en: "Module 03: The Math of Secrecy",
      es: "Módulo 03: La Matemática del Secreto"
    },
    category: {
      pt: "Criptografia",
      en: "Cryptography",
      es: "Criptografía"
    },
    description: {
      pt: "Exploração dos fundamentos matemáticos que tornam a criptografia moderna a base da confiança na internet.",
      en: "Exploration of the mathematical foundations that make modern cryptography the basis of trust on the internet.",
      es: "Exploración de los fundamentos matemáticos que convierten la criptografía moderna en la base de la confianza en internet."
    },
    problem: {
      pt: "A ameaça iminente da computação quântica aos algoritmos de criptografia atuais.",
      en: "The imminent threat of quantum computing to current encryption algorithms.",
      es: "La amenaza inminente de la computación cuántica a los algoritmos de cifrado actuales."
    },
    solution: {
      pt: "Estudo de criptografia pós-quântica baseada em reticulados (Lattice-based).",
      en: "Study of post-quantum cryptography based on lattices.",
      es: "Estudio de criptografía post-cuántica basada en retículos (Lattice-based)."
    },
    result: {
      pt: "Conhecimento sobre o futuro da privacidade em um mundo pós-clássico.",
      en: "Knowledge about the future of privacy in a post-classical world.",
      es: "Conocimiento sobre el futuro de la privacidad en un mundo post-clásico."
    },
    tags: ["Cryptography", "Quantum", "Mathematics"],
    githubUrl: GITHUB_URL
  },
  {
    id: 4,
    title: {
      pt: "Módulo 04: Resiliência em Nuvem",
      en: "Module 04: Cloud Resilience",
      es: "Módulo 04: Resiliencia en la Nube"
    },
    category: {
      pt: "Infraestrutura",
      en: "Infrastructure",
      es: "Infraestructura"
    },
    description: {
      pt: "Como arquiteturas distribuídas garantem a disponibilidade de dados mesmo sob ataques massivos (DDoS).",
      en: "How distributed architectures ensure data availability even under massive attacks (DDoS).",
      es: "Cómo las arquitecturas distribuidas garantizan la disponibilidad de datos incluso bajo ataques masivos (DDoS)."
    },
    problem: {
      pt: "Dependência de pontos únicos de falha em arquiteturas centralizadas.",
      en: "Dependence on single points of failure in centralized architectures.",
      es: "Dependencia de puntos únicos de fallo en arquitecturas centralizadas."
    },
    solution: {
      pt: "Pesquisa em redes Auto-Healing e redundância geográfica inteligente.",
      en: "Research on Auto-Healing networks and intelligent geographic redundancy.",
      es: "Investigación en redes Auto-Healing y redundancia geográfica inteligente."
    },
    result: {
      pt: "Estratégias para manter sistemas online sob as condições mais adversas.",
      en: "Strategies to keep systems online under the most adverse conditions.",
      es: "Estrategias para mantener sistemas en línea bajo las condiciones más adversas."
    },
    tags: ["Cloud Security", "Availability", "Networking"],
    githubUrl: GITHUB_URL
  },
  {
    id: 5,
    title: {
      pt: "Módulo 05: Engenharia de Privacidade",
      en: "Module 05: Privacy Engineering",
      es: "Módulo 05: Ingeniería de Privacidad"
    },
    category: {
      pt: "Privacidade",
      en: "Privacy",
      es: "Privacidad"
    },
    description: {
      pt: "O estudo de como construir sistemas que protegem a identidade por design (Privacy by Design).",
      en: "The study of how to build systems that protect identity by design (Privacy by Design).",
      es: "El estudio de cómo construir sistemas que protegen la identidad por diseño (Privacy by Design)."
    },
    problem: {
      pt: "Sistemas projetados sem considerar a privacidade como requisito fundamental.",
      en: "Systems designed without considering privacy as a fundamental requirement.",
      es: "Sistemas diseñados sin considerar la privacidad como requisito fundamental."
    },
    solution: {
      pt: "Implementação de técnicas de Diferencial Privacy e K-Anonymity.",
      en: "Implementation of Differential Privacy and K-Anonymity techniques.",
      es: "Implementación de técnicas de Diferencial Privacy y K-Anonymity."
    },
    result: {
      pt: "Proteção da identidade do usuário sem comprometer a utilidade analítica dos dados.",
      en: "User identity protection without compromising the analytical utility of the data.",
      es: "Protección de la identidad del usuario sin comprometer la utilidad analítica de los datos."
    },
    tags: ["Privacy", "Compliance", "Ethics"],
    githubUrl: GITHUB_URL
  },
  {
    id: 6,
    title: {
      pt: "Módulo 06: Biometria Comportamental",
      en: "Module 06: Behavioral Biometrics",
      es: "Módulo 06: Biometría Conductual"
    },
    category: {
      pt: "Autenticação",
      en: "Authentication",
      es: "Autenticación"
    },
    description: {
      pt: "Como a análise de padrões de digitação e movimento do mouse pode substituir senhas tradicionais.",
      en: "How typing patterns and mouse movement analysis can replace traditional passwords.",
      es: "Cómo el análisis de patrones de escritura y movimiento del mouse puede reemplazar las contraseñas tradicionales."
    },
    problem: {
      pt: "Senhas tradicionais são facilmente roubadas através de phishing ou força bruta.",
      en: "Traditional passwords are easily stolen through phishing or brute force.",
      es: "Las contraseñas tradicionales se roban fácilmente a través de phishing o fuerza bruta."
    },
    solution: {
      pt: "Uso de Redes Neurais Recorrentes (RNN) para modelar o perfil único de interação do usuário.",
      en: "Use of Recurrent Neural Networks (RNN) to model the user's unique interaction profile.",
      es: "Uso de Redes Neurales Recurrentes (RNN) para modelar el perfil de interacción único del usuario."
    },
    result: {
      pt: "Autenticação contínua e invisível, aumentando radicalmente a segurança.",
      en: "Continuous and invisible authentication, radically increasing security.",
      es: "Autenticación continua e invisible, aumentando radicalmente la seguridad."
    },
    tags: ["Biometrics", "Deep Learning", "UX Security"],
    githubUrl: GITHUB_URL
  },
  {
    id: 7,
    title: {
      pt: "Módulo 07: O Paradoxo da Criptografia",
      en: "Module 07: The Cryptography Paradox",
      es: "Módulo 07: La Paradoja de la Criptografía"
    },
    category: {
      pt: "Segurança de Dados",
      en: "Data Security",
      es: "Seguridad de Datos"
    },
    description: {
      pt: "Explicando o equilíbrio entre o sigilo absoluto e a necessidade de governança em um mundo regulado.",
      en: "Explaining the balance between absolute secrecy and the need for governance in a regulated world.",
      es: "Explicando el equilibrio entre el secreto absoluto y la necesidad de gobernanza en un mundo regulado."
    },
    problem: {
      pt: "O conflito entre a criptografia ponta-a-ponta e as leis de acesso à informação.",
      en: "The conflict between end-to-end encryption and information access laws.",
      es: "El conflicto entre el cifrado de extremo a extremo y las lees de acceso a la información."
    },
    solution: {
      pt: "Pesquisa em Multi-Party Computation (MPC) e Homomorphic Encryption.",
      en: "Research in Multi-Party Computation (MPC) and Homomorphic Encryption.",
      es: "Investigación en Multi-Party Computation (MPC) y Homomorphic Encryption."
    },
    result: {
      pt: "Processamento de dados criptografados sem nunca precisar descriptografá-los.",
      en: "Processing encrypted data without ever needing to decrypt it.",
      es: "Procesamiento de datos cifrados sin nunca necesitar descifrarlos."
    },
    tags: ["Cryptography", "Law", "Policy"],
    githubUrl: GITHUB_URL
  },
  {
    id: 8,
    title: {
      pt: "Módulo 08: Inteligência de Ameaças",
      en: "Module 08: Threat Intelligence",
      es: "Módulo 08: Inteligencia de Amenazas"
    },
    category: {
      pt: "Cyber Threat Intel",
      en: "Cyber Threat Intel",
      es: "Cyber Threat Intel"
    },
    description: {
      pt: "Pesquisa sobre coleta e análise de dados para antecipar movimentos de atacantes e fortalecer defesas proativamente.",
      en: "Research on data collection and analysis to anticipate attacker movements and proactively strengthen defenses.",
      es: "Investigación sobre recopilación y análisis de datos para anticipar movimientos de atacantes y fortalecer defensas de forma proactiva."
    },
    problem: {
      pt: "Organizações reagem a ataques depois que eles já causaram danos significativos.",
      en: "Organizations react to attacks after they have already caused significant damage.",
      es: "Las organizaciones reaccionan a los ataques después de que ya han causado daños significativos."
    },
    solution: {
      pt: "Análise de indicadores de comprometimento (IOCs) e padrões táticos, técnicos e procedimentais (TTPs).",
      en: "Analysis of indicators of compromise (IOCs) and tactical, technical, and procedural patterns (TTPs).",
      es: "Análisis de indicadores de compromiso (IOCs) y patrones tácticos, técnicos y procedimentales (TTPs)."
    },
    result: {
      pt: "Capacidade de prever e prevenir ataques antes que sejam executados.",
      en: "Ability to predict and prevent attacks before they are executed.",
      es: "Capacidad de predecir y prevenir ataques antes de que se ejecuten."
    },
    tags: ["Threat Intel", "OSINT", "Proactive Defense"],
    githubUrl: GITHUB_URL
  },
  {
    id: 9,
    title: {
      pt: "Módulo 09: Análise Forense Digital",
      en: "Module 09: Digital Forensics",
      es: "Módulo 09: Informática Forense"
    },
    category: {
      pt: "Forense Digital",
      en: "Digital Forensics",
      es: "Informática Forense"
    },
    description: {
      pt: "Técnicas de investigação e preservação de evidências digitais para rastrear atacantes e comprovar incidentes.",
      en: "Investigation and digital evidence preservation techniques to track attackers and prove incidents.",
      es: "Técnicas de investigación y preservación de evidencia digital para rastrear atacantes y comprovar incidentes."
    },
    problem: {
      pt: "Atacantes apagam rastros digitais após comprometer sistemas, dificultando a identificação.",
      en: "Attackers erase digital traces after compromising systems, making identification difficult.",
      es: "Los atacantes borran rastros digitales después de comprometer sistemas, dificultando la identificación."
    },
    solution: {
      pt: "Metodologias de cadeia de custódia, análise de memória volátil e recuperação de dados deletados.",
      en: "Chain of custody methodologies, volatile memory analysis, and deleted data recovery.",
      es: "Metodologías de cadena de custodia, análisis de memoria volátil y recuperación de datos eliminados."
    },
    result: {
      pt: "Rastreamento preciso de atacantes e coleta de provas admissíveis legalmente.",
      en: "Precise attacker tracking and legally admissible evidence collection.",
      es: "Rastreo preciso de atacantes y recopilación de evidencia legalmente admisible."
    },
    tags: ["Forensics", "Incident Response", "Evidence"],
    githubUrl: GITHUB_URL
  }
];
