import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Knowledge",
        about: "Foundations",
        skills: "Curriculum",
        symbiosis: "Symmetry",
        projects: "Lab",
        contact: "Connect",
        menu_open: "Open menu",
        menu_close: "Close menu",
        change_language: "Language"
      },
      about: {
        title: "Digital Foundations",
        description: "In an era where information is the most valuable asset, understanding the duality between Data Science and Cybersecurity is not just a career path—it's a necessity for digital citizenship. We explore how data generates value and how security ensures that value remains protected.",
        age: "Data Maturity",
        age_label: "Insight",
        birth_date: "2026",
        nationality_label: "Scope",
        naturality_label: "Focus",
        detailed_profile: "This hub is dedicated to the study of information integrity. We analyze how statistical models can predict threats and how encryption protects the very fabric of our digital interactions. Here, knowledge is the first line of defense.",
        graduation_label: "Data Science",
        graduation_title: "The Power of Prediction",
        graduation_inst: "Turning raw information into strategic foresight and understanding patterns that move the world.",
        postgrad_label: "Cybersecurity",
        postgrad_title: "The Art of Defense",
        postgrad_inst: "Mastering the layers of protection that keep our digital infrastructure resilient against evolving threats."
      },
      hero: {
        badge: "Knowledge Hub | Research & Study",
        greeting: "Unlock",
        title_pre: "Data &",
        title_highlight: "Security",
        description: "Beyond the code. Explore the critical importance of data analysis and the essential role of cybersecurity in our hyper-connected society. Knowledge is your strongest shield.",
        about_me: "An educational space dedicated to the evolution of digital intelligence and defense.",
        view_projects: "Start Learning",
        scroll: "Explore Deeply"
      },
      symbiosis: {
        title: "The Symmetry of Intelligence",
        subtitle: "Where Data meets Defense",
        description: "Data Science provides the analytical mind to identify patterns and predict anomalies. Cybersecurity provides the immune system to react and protect. Together, they form the foundation of a resilient digital world.",
        item1_title: "Data-Driven Defense",
        item1_desc: "Using massive datasets to identify global attack patterns before they hit your network.",
        item2_title: "Secure AI",
        item2_desc: "Protecting machine learning models from adversarial attacks and data poisoning.",
        item3_title: "Real-time Detection",
        item3_desc: "Identifying behavioral anomalies instantly using high-velocity stream processing.",
        item4_title: "Adaptive Encryption",
        item4_desc: "Dynamically adjusting security layers based on real-time risk assessment and user behavior.",
        item5_title: "Digital Ethics",
        item5_desc: "Ensuring privacy and integrity through ethical data processing and advanced anonymization.",
        fact_title: "QUICK INSIGHT",
        fact_text: "Did you know? 90% of the world's data was generated in the last 2 years, making security a race against volume."
      },
      skills: {
        title: "Educational Curriculum",
        categories: {
          languages: "Information Theory",
          databases: "Defensive Math",
          ml: "Pattern Recognition",
          data_manipulation: "Digital Ethics",
          deep_learning: "Neural Security",
          visualization: "Threat Mapping",
          cloud: "Distributed Trust",
          mlops: "System Resilience",
          tools: "Study Resources"
        }
      },
      projects: {
        title: "Research Modules",
        view_code: "Explore Findings",
        challenge: "Research Case",
        impact: "Key Insight"
      },
      footer: {
        title: "Deepen Your Insight?",
        description: "The digital frontier is vast. Let's exchange knowledge on the future of data and protection.",
        email_label: "Join the Discussion",
        copyright: "© 2026 Data & Security Knowledge Hub.",
        rights: "Educational & Research Purpose.",
        developed_with: "Empowered by"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: "Conhecimento",
        about: "Fundamentos",
        skills: "Currículo",
        symbiosis: "Simetria",
        projects: "Laboratório",
        contact: "Conexão",
        menu_open: "Abrir menu",
        menu_close: "Fechar menu",
        change_language: "Idioma"
      },
      about: {
        title: "Fundamentos Digitais",
        description: "Em uma era onde a informação é o ativo mais valioso, entender a dualidade entre Ciência de Dados e Cibersegurança não é apenas uma carreira — é uma necessidade para a cidadania digital. Exploramos como os dados geram valor e como a segurança garante que esse valor permaneça protegido.",
        age: "Maturidade de Dados",
        age_label: "Insight",
        birth_date: "2026",
        nationality_label: "Escopo",
        naturality_label: "Foco",
        detailed_profile: "Este hub é dedicado ao estudo da integridade da informação. Analisamos como modelos estatísticos podem prever ameaças e como a criptografia protege o próprio tecido de nossas interações digitais. Aqui, o conhecimento é a primeira linha de defesa.",
        mission_label: "Nossa Visão",
        mission_text: "Democratizar o entendimento técnico sobre a importância de proteger e analisar dados no século XXI.",
        graduation_label: "Data Science",
        graduation_title: "O Poder da Predição",
        graduation_inst: "Transformando informações brutas em visão estratégica e compreendendo os padrões que movem o mundo.",
        postgrad_label: "Cibersegurança",
        postgrad_title: "A Arte da Defesa",
        postgrad_inst: "Dominando as camadas de proteção que mantêm nossa infraestrutura digital resiliente contra ameaças em constante evolução."
      },
      hero: {
        badge: "Hub de Conhecimento | Pesquisa & Estudo",
        title_pre: "Dados &",
        title_highlight: "Segurança",
        description: "Além do código. Explore a importância crítica da análise de dados e o papel essencial da cibersegurança em nossa sociedade hiperconectada. O conhecimento é seu escudo mais forte.",
        about_me: "Um espaço educativo dedicado à evolução da inteligência e defesa digital.",
        view_projects: "Começar Aprendizado",
        scroll: "Explore Profundamente"
      },
      symbiosis: {
        title: "A Simbiose da Inteligência",
        subtitle: "Onde Dados encontram Defesa",
        description: "A Ciência de Dados fornece a mente analítica para identificar padrões e prever anomalias. A Cibersegurança fornece o sistema imunológico para reagir e proteger. Juntos, formam a base de um mundo digital resiliente.",
        item1_title: "Defesa Baseada em Dados",
        item1_desc: "Utilizando conjuntos massivos de dados para identificar padrões globais de ataque antes que atinjam sua rede.",
        item2_title: "IA Segura",
        item2_desc: "Protegendo algoritmos de machine learning contra ataques adversários e envenenamento de dados.",
        item3_title: "Detecção em Tempo Real",
        item3_desc: "Identificando anomalias comportamentais instantaneamente através do processamento de fluxos de alta velocidade.",
        item4_title: "Criptografia Adaptativa",
        item4_desc: "Ajustando dinamicamente as camadas de segurança com base na avaliação de risco e comportamento do usuário.",
        item5_title: "Ética Digital",
        item5_desc: "Garantindo a privacidade e integridade através do processamento ético de dados e anonimização avançada.",
        fact_title: "INSIGHT RÁPIDO",
        fact_text: "Você sabia? 90% dos dados mundiais foram criados nos últimos 2 anos, tornando a segurança uma corrida contra o volume."
      },
      skills: {
        title: "Currículo Educativo",
        categories: {
          languages: "Teoria da Informação",
          databases: "Matemática Defensiva",
          ml: "Reconhecimento de Padrões",
          data_manipulation: "Ética Digital",
          deep_learning: "Defesa Neural",
          visualization: "Mapeamento de Ameaças",
          cloud: "Confiança Distribuída",
          mlops: "Resiliência de Sistemas",
          tools: "Recursos de Estudo"
        }
      },
      projects: {
        title: "Módulos de Pesquisa",
        view_code: "Explorar Descobertas",
        challenge: "Caso de Estudo",
        impact: "Insight Chave"
      },
      footer: {
        title: "Vamos Conversar?",
        description: "A fronteira digital é vasta. Vamos trocar conhecimentos sobre o futuro dos dados e da proteção.",
        email_label: "Participar da Discussão",
        copyright: "© 2026 Hub de Conhecimento: Dados & Segurança.",
        rights: "Finalidade Educativa e de Pesquisa.",
        developed_with: "Capacitado por"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
