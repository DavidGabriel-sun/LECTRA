import { LessonItem, FacultyMember } from '../types';

export const FACULTY_DIRECTORY: FacultyMember[] = [
  // HUMANAS
  {
    area: 'humanas',
    areaName: 'Ciências Humanas',
    subjectKey: 'geografia',
    subjectName: 'Geografia',
    professorName: 'Prof. Matheus',
    professorRaw: 'matheus',
    gender: 'M',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    description: 'Geopolítica mundial, dinâmicas de urbanização, demografia e cartografia digital aplicada.',
  },
  {
    area: 'humanas',
    areaName: 'Ciências Humanas',
    subjectKey: 'historia',
    subjectName: 'História',
    professorName: 'Profa. Tatiana',
    professorRaw: 'tatiana',
    gender: 'F',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    description: 'História do Brasil Império, República, movimentos sociais e história contemporânea mundial.',
  },
  {
    area: 'humanas',
    areaName: 'Ciências Humanas',
    subjectKey: 'sociologia',
    subjectName: 'Sociologia',
    professorName: 'Profa. Katia',
    professorRaw: 'katia',
    gender: 'F',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    description: 'Estruturas sociais, cidadania, direitos fundamentais e instituições no mundo contemporâneo.',
  },
  {
    area: 'humanas',
    areaName: 'Ciências Humanas',
    subjectKey: 'filosofia',
    subjectName: 'Filosofia',
    professorName: 'Profa. Olivia',
    professorRaw: 'olivia',
    gender: 'F',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    description: 'Ética e moral, epistemologia, filosofia política e formação do pensamento crítico moderno.',
  },

  // LINGUAGENS
  {
    area: 'linguagens',
    areaName: 'Linguagens e Códigos',
    subjectKey: 'portugues',
    subjectName: 'Português',
    professorName: 'Profa. Regina',
    professorRaw: 'regina',
    gender: 'F',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    description: 'Gramática aplicada, coesão referencial, produção textual e redação no padrão nota 1000.',
  },
  {
    area: 'linguagens',
    areaName: 'Linguagens e Códigos',
    subjectKey: 'artes',
    subjectName: 'Artes',
    professorName: 'Prof. Marcão',
    professorRaw: 'marcão',
    gender: 'M',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    description: 'História da arte, vanguardas modernas, patrimônio cultural e linguagens visuais contemporâneas.',
  },
  {
    area: 'linguagens',
    areaName: 'Linguagens e Códigos',
    subjectKey: 'ed_fisica',
    subjectName: 'Ed. Física',
    professorName: 'Profa. Iracema',
    professorRaw: 'iracema',
    gender: 'F',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    description: 'Fisiologia do exercício, cultura corporal de movimento, saúde preventiva e esportes.',
  },
  {
    area: 'linguagens',
    areaName: 'Linguagens e Códigos',
    subjectKey: 'ingles',
    subjectName: 'Inglês',
    professorName: 'Prof. Folks',
    professorRaw: 'folks',
    gender: 'M',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    description: 'Reading comprehension, phrasal verbs, interpretação de textos globais e estratégias para exames.',
  },

  // NATUREZA
  {
    area: 'natureza',
    areaName: 'Ciências da Natureza',
    subjectKey: 'biologia',
    subjectName: 'Biologia',
    professorName: 'Profa. Camila',
    professorRaw: 'camila',
    gender: 'F',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    description: 'Estrutura celular, genética molecular, ecologia, biodiversidade e fisiologia humana.',
  },
  {
    area: 'natureza',
    areaName: 'Ciências da Natureza',
    subjectKey: 'fisica',
    subjectName: 'Física',
    professorName: 'Prof. Rafael',
    professorRaw: 'rafael',
    gender: 'M',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    description: 'Termodinâmica, mecânica clássica, eletromagnetismo e ondulatória na indústria e no cotidiano.',
  },
  {
    area: 'natureza',
    areaName: 'Ciências da Natureza',
    subjectKey: 'quimica',
    subjectName: 'Química',
    professorName: 'Profa. Gabriela',
    professorRaw: 'gabriela',
    gender: 'F',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    description: 'Reações químicas, termoquímica, estequiometria, funções orgânicas e soluções aquosas.',
  },

  // MATEMÁTICA
  {
    area: 'matematica',
    areaName: 'Matemática e suas Tecnologias',
    subjectKey: 'matematica',
    subjectName: 'Matemática',
    professorName: 'Prof. Vilson',
    professorRaw: 'vilson',
    gender: 'M',
    themeBg: 'bg-[#EF4444]',
    accentColor: '#EF4444',
    description: 'Geometria espacial, prismas e cilindros, funções exponenciais, matrizes e análise combinatória.',
  },
];

// All 12 individual subject lessons
export const ALL_SUBJECT_LESSONS: LessonItem[] = [
  // 1. MATEMÁTICA - Prof. Vilson
  {
    id: 'aula-matematica',
    key: 'matematica',
    area: 'matematica',
    areaTitle: 'Matemática',
    subject: 'Matemática',
    title: 'MATEMATICA',
    professorRole: 'Professor',
    professorName: 'Prof. Vilson',
    professorRaw: 'vilson',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Geometria Espacial - Prismas, Cilindros e Volumes',
    themeBg: 'bg-[#EF4444]',
    accentColor: '#EF4444',
    hexColor: '#EF4444',
    playIconColor: 'text-[#b91c1c]',
    badgeBg: 'bg-red-600/30',
    description:
      'Aula prática com o Prof. Vilson sobre sólidos geométricos: cálculo de área superficial, cálculo de volume de prismas e cilindros retos, e resolução de situações-problema aplicadas à engenharia e ao cotidiano.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Revisão de Geometria Plana',
        summary: 'Áreas de triângulos, polígonos regulares e círculos com o Prof. Vilson.',
      },
      {
        timeInSeconds: 610,
        label: 'Prismas: Nomenclatura e Volume',
        summary: 'Fórmula universal V = Ab * h e planificação de prismas.',
      },
      {
        timeInSeconds: 1530,
        label: 'Cilindros e Sólidos de Revolução',
        summary: 'Relação com círculos e área lateral desdobrada.',
      },
      {
        timeInSeconds: 2250,
        label: 'Resolução de Desafios do Vestibular',
        summary: 'Problemas de capacidade e vazão de reservatórios resolvidos passo a passo.',
      },
    ],
    summaryPoints: [
      'Volume do Prisma: V = Área da Base × Altura (V = Ab · h).',
      'Volume do Cilindro Reto: V = π · r² · h.',
      'Área Total: Soma das duas bases com a área da superfície lateral.',
      'Conversão essencial de unidades: 1 m³ = 1000 L, 1 dm³ = 1 L, 1 cm³ = 1 mL.',
    ],
    exercises: [
      {
        id: 'ex-mat-1',
        question:
          'Um reservatório cilíndrico tem raio da base medindo 2 m e altura de 3 m. Adotando π = 3,14, qual é a sua capacidade máxima aproximada em litros?',
        options: ['3.768 litros', '37.680 litros', '18.840 litros', '376.800 litros'],
        correctIndex: 1,
        explanation:
          'V = π · r² · h = 3,14 · 2² · 3 = 3,14 · 4 · 3 = 37,68 m³. Como 1 m³ = 1.000 L, 37,68 × 1.000 = 37.680 litros.',
      },
      {
        id: 'ex-mat-2',
        question:
          'Em um prisma reto de base quadrada, o lado da base mede 5 cm e a altura mede 10 cm. O volume desse prisma é:',
        options: ['150 cm³', '250 cm³', '500 cm³', '100 cm³'],
        correctIndex: 1,
        explanation: 'Ab = 5 × 5 = 25 cm². Volume = Ab × h = 25 × 10 = 250 cm³.',
      },
    ],
    materials: [
      {
        id: 'mat-mat-1',
        title: 'Formulário Completo de Geometria Espacial - Prof. Vilson.pdf',
        type: 'pdf',
        size: '1.8 MB',
        pages: 6,
      },
      {
        id: 'mat-mat-2',
        title: 'Lista de Exercícios Resolvidos SESI.pdf',
        type: 'pdf',
        size: '4.2 MB',
        pages: 18,
      },
    ],
  },

  // 2. GEOGRAFIA - Prof. Matheus
  {
    id: 'aula-geografia',
    key: 'geografia',
    area: 'humanas',
    areaTitle: 'Ciências Humanas',
    subject: 'Geografia',
    title: 'GEOGRAFIA',
    professorRole: 'Professor',
    professorName: 'Prof. Matheus',
    professorRaw: 'matheus',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Geopolítica Global, Urbanização e Fluxos Migratórios',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    hexColor: '#007AFF',
    playIconColor: 'text-[#005bb5]',
    badgeBg: 'bg-blue-600/30',
    description:
      'Nesta aula com o Prof. Matheus, exploramos a configuração das novas rotas comerciais mundiais, a urbanização e os desafios das megacidades contemporâneas.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Abertura & Panorama Global',
        summary: 'Conceitos de divisão internacional do trabalho e globalização.',
      },
      {
        timeInSeconds: 720,
        label: 'Urbanização Brasileira & Segregação',
        summary: 'Crescimento urbano e infraestrutura das capitais.',
      },
      {
        timeInSeconds: 1600,
        label: 'Migrações e Geopolítica',
        summary: 'Fluxos migratórios internacionais e refúgio no século XXI.',
      },
    ],
    summaryPoints: [
      'A transição demográfica brasileira e o envelhecimento populacional.',
      'Megacidades, metropolização e conurbação.',
      'Blocos econômicos regionais e acordos comerciais.',
    ],
    exercises: [
      {
        id: 'ex-geo-1',
        question: 'O processo de união física de duas ou mais cidades vizinhas devido ao crescimento horizontal é denominado:',
        options: ['Conurbação', 'Gentrificação', 'Descentralização', 'Favelização'],
        correctIndex: 0,
        explanation: 'Conurbação é o fenômeno urbano em que duas cidades limítrofes se expandem até fundirem suas malhas urbanas.',
      },
    ],
    materials: [
      {
        id: 'mat-geo-1',
        title: 'Atlas Geopolítico Contemporâneo - Prof. Matheus.pdf',
        type: 'pdf',
        size: '5.2 MB',
        pages: 24,
      },
    ],
  },

  // 3. HISTÓRIA - Profa. Tatiana
  {
    id: 'aula-historia',
    key: 'historia',
    area: 'humanas',
    areaTitle: 'Ciências Humanas',
    subject: 'História',
    title: 'HISTÓRIA',
    professorRole: 'Professora',
    professorName: 'Profa. Tatiana',
    professorRaw: 'tatiana',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Brasil Império - O Segundo Reinado e a Crise da Monarquia',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    hexColor: '#007AFF',
    playIconColor: 'text-[#005bb5]',
    badgeBg: 'bg-blue-600/30',
    description:
      'A Profa. Tatiana analisa os fundamentos políticos e econômicos do Segundo Reinado brasileiro, a Guerra do Paraguai, o movimento abolicionista e a proclamação republicana.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Contexto do Segundo Reinado',
        summary: 'A estabilização política sob Dom Pedro II.',
      },
      {
        timeInSeconds: 850,
        label: 'A Economia Cafeeira e Imigração',
        summary: 'A transição da mão de obra escravizada para assalariada.',
      },
      {
        timeInSeconds: 1800,
        label: 'Crise Militar e Religiosa',
        summary: 'Os pilares do declínio da ordem monárquica.',
      },
    ],
    summaryPoints: [
      'O parlamentarismo às avessas no Brasil Império.',
      'O papel do café na modernização de ferrovias e portos.',
      'As Leis Abolicionistas graduais e a Lei Áurea de 1888.',
    ],
    exercises: [
      {
        id: 'ex-his-1',
        question: 'O sistema político do Segundo Reinado ficou conhecido como "Parlamentarismo às avessas" porque:',
        options: [
          'O Presidente do Conselho governava sem qualquer autoridade real',
          'O Poder Moderador permitia ao Imperador nomear o Primeiro-Ministro antes da eleição da Câmara',
          'Não existiam partidos políticos organizados no período',
          'O parlamento era composto unicamente por nobres estrangeiros',
        ],
        correctIndex: 1,
        explanation: 'No Brasil, o Imperador escolhia o Presidente do Conselho de Ministros graças ao Poder Moderador.',
      },
    ],
    materials: [
      {
        id: 'mat-his-1',
        title: 'Linha do Tempo - Brasil Monárquico - Profa. Tatiana.pdf',
        type: 'pdf',
        size: '3.6 MB',
        pages: 12,
      },
    ],
  },

  // 4. SOCIOLOGIA - Profa. Katia
  {
    id: 'aula-sociologia',
    key: 'sociologia',
    area: 'humanas',
    areaTitle: 'Ciências Humanas',
    subject: 'Sociologia',
    title: 'SOCIOLOGIA',
    professorRole: 'Professora',
    professorName: 'Profa. Katia',
    professorRaw: 'katia',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Cidadania, Estratificação Social e Movimentos Coletivos',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    hexColor: '#007AFF',
    playIconColor: 'text-[#005bb5]',
    badgeBg: 'bg-blue-600/30',
    description:
      'Com a Profa. Katia, analisamos as teorias sociológicas clássicas de Marx, Durkheim e Weber aplicadas às desigualdades sociais e manifestações culturais no Brasil.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Conceito de Cidadania no Brasil',
        summary: 'Evolução dos direitos civis, políticos e sociais.',
      },
      {
        timeInSeconds: 910,
        label: 'Instituições Sociais e Socialização',
        summary: 'Família, escola, trabalho e meios de comunicação.',
      },
    ],
    summaryPoints: [
      'A distinção sociológica entre classes e estratos.',
      'O papel das instituições na manutenção da coesão e ordem social.',
      'Novos movimentos sociais e o ciberativismo.',
    ],
    exercises: [
      {
        id: 'ex-soc-1',
        question: 'Segundo Max Weber, a estratificação social se assenta em três dimensões fundamentais:',
        options: [
          'Econômica (classe), Social (status/prestígio) e Política (poder)',
          'Genética, Geográfica e Linguística',
          'Apenas na posse dos meios de produção',
          'Biológica, Religiosa e Governamental',
        ],
        correctIndex: 0,
        explanation: 'Weber propôs uma análise multidimensional da estratificação envolvendo classe, estamento (status) e partido (poder).',
      },
    ],
    materials: [
      {
        id: 'mat-soc-1',
        title: 'Teorias da Estrutura Social - Profa. Katia.pdf',
        type: 'pdf',
        size: '2.8 MB',
        pages: 15,
      },
    ],
  },

  // 5. FILOSOFIA - Profa. Olivia
  {
    id: 'aula-filosofia',
    key: 'filosofia',
    area: 'humanas',
    areaTitle: 'Ciências Humanas',
    subject: 'Filosofia',
    title: 'FILOSOFIA',
    professorRole: 'Professora',
    professorName: 'Profa. Olivia',
    professorRaw: 'olivia',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Ética, Moral e o Pensamento Político Moderno',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    hexColor: '#007AFF',
    playIconColor: 'text-[#005bb5]',
    badgeBg: 'bg-blue-600/30',
    description:
      'A Profa. Olivia conduz uma reflexão sobre a distinção entre ética e moral, os contratualistas (Hobbes, Locke e Rousseau) e a ética do dever em Immanuel Kant.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Ética vs. Moral',
        summary: 'Fundamentações e dilemas morais no cotidiano.',
      },
      {
        timeInSeconds: 880,
        label: 'Os Contratualistas',
        summary: 'Estado de natureza e o pacto social.',
      },
    ],
    summaryPoints: [
      'O imperativo categórico kantiano como guia universal da ação moral.',
      'O contrato social como origem legítima da autoridade civil.',
      'Diferença entre o estado de natureza hobbesiano e rousseauniano.',
    ],
    exercises: [
      {
        id: 'ex-fil-1',
        question: 'O imperativo categórico formulado por Immanuel Kant preconiza que:',
        options: [
          'Deve-se agir somente segundo a máxima que possa ser convertida em lei universal',
          'Os fins justificam quaisquer meios utilizados',
          'A felicidade individual é o único critério moral válido',
          'A moralidade deve sempre obedecer às ordens do líder de Estado',
        ],
        correctIndex: 0,
        explanation: 'Kant definiu o imperativo categórico: "Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne lei universal".',
      },
    ],
    materials: [
      {
        id: 'mat-fil-1',
        title: 'Caderno de Filosofia Política - Profa. Olivia.pdf',
        type: 'pdf',
        size: '3.1 MB',
        pages: 18,
      },
    ],
  },

  // 6. PORTUGUÊS - Profa. Regina
  {
    id: 'aula-portugues',
    key: 'portugues',
    area: 'linguagens',
    areaTitle: 'Linguagens e Códigos',
    subject: 'Português',
    title: 'PORTUGUÊS',
    professorRole: 'Professora',
    professorName: 'Profa. Regina',
    professorRaw: 'regina',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Coesão Referencial e Estrutura da Redação Nota 1000',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    hexColor: '#F97316',
    playIconColor: 'text-[#c2410c]',
    badgeBg: 'bg-orange-600/30',
    description:
      'Nesta aula focada em Língua Portuguesa e Produção Textual, a Profa. Regina disseca os conectivos operadores de argumentação, regras de paralelismo sintático e estratégias para a proposta de intervenção social.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Apresentação do Tema e Tese',
        summary: 'Como formular uma tese firme no primeiro parágrafo.',
      },
      {
        timeInSeconds: 580,
        label: 'Operadores Argumentativos & Coesão',
        summary: 'Uso estratégico de conectivos interparágrafos e intraparágrafos.',
      },
      {
        timeInSeconds: 1490,
        label: 'Análise de Redações Exemplo SESI',
        summary: 'Estudo de repertórios socioculturais legitimados com a Profa. Regina.',
      },
      {
        timeInSeconds: 2190,
        label: 'Os 5 Elementos da Proposta de Intervenção',
        summary: 'Agente, Ação, Meio/Modo, Efeito e Detalhamento.',
      },
    ],
    summaryPoints: [
      'Evitar repetição lexical com anáforas, catáforas e hiperônimos.',
      'Garantir conectivos diversificados entre todos os parágrafos.',
      'Repertório sociocultural precisa ser produtivo e legitimado.',
      'A proposta de intervenção deve respeitar os direitos humanos.',
    ],
    exercises: [
      {
        id: 'ex-port-1',
        question:
          'Qual dos seguintes conectivos estabelece semanticamente uma relação de oposição/ressalva entre orações?',
        options: ['Porquanto', 'Contudo', 'Portanto', 'Visto que'],
        correctIndex: 1,
        explanation:
          '"Contudo" é uma conjunção adversativa, indicando contraste ou quebra de expectativa.',
      },
    ],
    materials: [
      {
        id: 'mat-port-1',
        title: 'Guia de Conectivos & Operadores - Profa. Regina.pdf',
        type: 'pdf',
        size: '2.5 MB',
        pages: 10,
      },
    ],
  },

  // 7. ARTES - Prof. Marcão
  {
    id: 'aula-artes',
    key: 'artes',
    area: 'linguagens',
    areaTitle: 'Linguagens e Códigos',
    subject: 'Artes',
    title: 'ARTES',
    professorRole: 'Professor',
    professorName: 'Prof. Marcão',
    professorRaw: 'marcão',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Vanguardas Europeias, Semana de 22 e Modernismo',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    hexColor: '#F97316',
    playIconColor: 'text-[#c2410c]',
    badgeBg: 'bg-orange-600/30',
    description:
      'O Prof. Marcão analisa as vanguardas artísticas do início do século XX (Cubismo, Futurismo, Expressionismo, Dadaísmo e Surrealismo) e a Semana de Arte Moderna de 1922 no Brasil.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'A Ruptura Modernista',
        summary: 'O rompimento com o academicismo e a arte representativa.',
      },
      {
        timeInSeconds: 820,
        label: 'A Semana de Arte Moderna de 1922',
        summary: 'Tarsila do Amaral, Anita Malfatti, Oswald e Mário de Andrade.',
      },
    ],
    summaryPoints: [
      'A estética antropofágica como assimilação e transformação da cultura europeia.',
      'O Cubismo e a geometrização das formas no espaço pictórico.',
      'A influência das artes visuais nas identidades culturais nacionais.',
    ],
    exercises: [
      {
        id: 'ex-art-1',
        question: 'O Manifesto Antropófago, lançado em 1928 por Oswald de Andrade, propunha poeticamente:',
        options: [
          'A rejeição total e irrevogável de qualquer elemento cultural de fora do Brasil',
          'A "deglutição" crítica da cultura estrangeira para recriá-la sob matriz genuinamente brasileira',
          'A cópia fiel e acadêmica das pinturas do Renascimento italiano',
          'A extinção de toda e qualquer forma de expressão artística moderna',
        ],
        correctIndex: 1,
        explanation: 'A antropofagia cultural propunha devorar as referências estrangeiras e sintetizá-las em algo brasileiro.',
      },
    ],
    materials: [
      {
        id: 'mat-art-1',
        title: 'Painel Visual das Vanguardas - Prof. Marcão.pdf',
        type: 'pdf',
        size: '4.8 MB',
        pages: 20,
      },
    ],
  },

  // 8. EDUCAÇÃO FÍSICA - Profa. Iracema
  {
    id: 'aula-ed-fisica',
    key: 'ed_fisica',
    area: 'linguagens',
    areaTitle: 'Linguagens e Códigos',
    subject: 'Ed. Física',
    title: 'EDUCAÇÃO FÍSICA',
    professorRole: 'Professora',
    professorName: 'Profa. Iracema',
    professorRaw: 'iracema',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Fisiologia do Exercício, Saúde Metabólica e Ergonomia',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    hexColor: '#F97316',
    playIconColor: 'text-[#c2410c]',
    badgeBg: 'bg-orange-600/30',
    description:
      'A Profa. Iracema aborda a adaptação cardiovascular ao esforço físico, a importância da mobilidade articular e a ergonomia postural para estudantes e trabalhadores.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Sistemas Energéticos (Aeróbico vs. Anaeróbico)',
        summary: 'Como o corpo produz energia para diferentes intensidades de movimento.',
      },
      {
        timeInSeconds: 760,
        label: 'Postura, Ergonomia e Prevenção de Lesões',
        summary: 'Cuidados posturais essenciais para a rotina diária.',
      },
    ],
    summaryPoints: [
      'A frequência cardíaca alvo e zonas de treinamento físico.',
      'A prática regular de atividade física como reguladora do estresse e foco mental.',
      'Importância dos exercícios resistidos na integridade óssea e muscular.',
    ],
    exercises: [
      {
        id: 'ex-edf-1',
        question: 'Qual via energética é predominantemente utilizada durante uma corrida contínua de 40 minutos em ritmo moderado?',
        options: ['Sistema ATP-CP', 'Glicólise anaeróbica lática', 'Sistema oxidativo aeróbico', 'Fermentação etílica'],
        correctIndex: 2,
        explanation: 'Atividades de longa duração e intensidade moderada utilizam predominantemente a via aeróbica oxidativa.',
      },
    ],
    materials: [
      {
        id: 'mat-edf-1',
        title: 'Manual de Fisiologia e Ergonomia - Profa. Iracema.pdf',
        type: 'pdf',
        size: '2.1 MB',
        pages: 14,
      },
    ],
  },

  // 9. INGLÊS - Prof. Folks
  {
    id: 'aula-ingles',
    key: 'ingles',
    area: 'linguagens',
    areaTitle: 'Linguagens e Códigos',
    subject: 'Inglês',
    title: 'INGLÊS',
    professorRole: 'Professor',
    professorName: 'Prof. Folks',
    professorRaw: 'folks',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Reading Strategies, Phrasal Verbs & Textual Context',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    hexColor: '#F97316',
    playIconColor: 'text-[#c2410c]',
    badgeBg: 'bg-orange-600/30',
    description:
      'Com o Prof. Folks, dominamos técnicas de leitura rápida (Skimming e Scanning), reconhecimento de cognatos e falsos cognatos, e interpretação de notícias e artigos científicos.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Skimming and Scanning Techniques',
        summary: 'Como captar a ideia central do texto sem traduzir palavra por palavra.',
      },
      {
        timeInSeconds: 840,
        label: 'Essential Phrasal Verbs in Context',
        summary: 'Estruturas idiomáticas comuns em charges, artigos e exames vestibulares.',
      },
    ],
    summaryPoints: [
      'Diferença prática entre Skimming (leitura panorâmica) e Scanning (busca de dados pontuais).',
      'Cuidado redobrado com falsos amigos (falsos cognatos).',
      'Identificação de conectivos de causa, contraste e conclusão em inglês.',
    ],
    exercises: [
      {
        id: 'ex-ing-1',
        question: 'In English, what does the phrasal verb "carry out" most commonly mean in an academic or scientific context?',
        options: ['To cancel', 'To conduct or perform an experiment/task', 'To physically transport outside', 'To refuse'],
        correctIndex: 1,
        explanation: '"To carry out" means to execute, perform, or implement a research, experiment, or duty.',
      },
    ],
    materials: [
      {
        id: 'mat-ing-1',
        title: 'Reading Comprehension Masterpack - Prof. Folks.pdf',
        type: 'pdf',
        size: '3.4 MB',
        pages: 16,
      },
    ],
  },

  // 10. BIOLOGIA - Profa. Camila
  {
    id: 'aula-biologia',
    key: 'biologia',
    area: 'natureza',
    areaTitle: 'Ciências da Natureza',
    subject: 'Biologia',
    title: 'BIOLOGIA',
    professorRole: 'Professora',
    professorName: 'Profa. Camila',
    professorRaw: 'camila',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Estrutura Celular, Organelas e Transporte de Membrana',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    hexColor: '#22C55E',
    playIconColor: 'text-[#15803d]',
    badgeBg: 'bg-emerald-600/30',
    description:
      'Uma aula aprofundada com a Profa. Camila sobre biologia celular: o modelo do mosaico fluido da membrana plasmática, osmose, difusão e o papel das mitocôndrias na bioenergética.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Estrutura da Membrana Plasmática',
        summary: 'Bicamada fosfolipídica e proteínas integrais com a Profa. Camila.',
      },
      {
        timeInSeconds: 790,
        label: 'Transporte Passivo vs. Ativo',
        summary: 'Difusão simples, facilitada, osmose e bomba de sódio-potássio.',
      },
    ],
    summaryPoints: [
      'O transporte ativo requer hidrólise de ATP contra o gradiente de concentração.',
      'A osmose é o movimento do solvente (água) do meio hipotônico para o hipertônico.',
      'Mitocôndrias e cloroplastos possuem DNA próprio e teoria endossimbiótica.',
    ],
    exercises: [
      {
        id: 'ex-bio-1',
        question: 'Quando uma hemácia é colocada em uma solução fortemente hipertônica em relação ao seu citoplasma, o que acontece?',
        options: [
          'Ela absorve água e se rompe (hemólise)',
          'Ela perde água por osmose e murcha (crenação)',
          'Ela permanece inalterada',
          'Ela duplica imediatamente o seu volume',
        ],
        correctIndex: 1,
        explanation: 'Em meio hipertônico, a água sai da célula por osmose em direção à maior concentração de soluto, provocando a crenação da hemácia.',
      },
    ],
    materials: [
      {
        id: 'mat-bio-1',
        title: 'Citologia e Membranas Biológicas - Profa. Camila.pdf',
        type: 'pdf',
        size: '4.1 MB',
        pages: 22,
      },
    ],
  },

  // 11. FÍSICA - Prof. Rafael
  {
    id: 'aula-fisica',
    key: 'fisica',
    area: 'natureza',
    areaTitle: 'Ciências da Natureza',
    subject: 'Física',
    title: 'FÍSICA',
    professorRole: 'Professor',
    professorName: 'Prof. Rafael',
    professorRaw: 'rafael',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Termodinâmica, Trabalho dos Gases e Rendimento Térmico',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    hexColor: '#22C55E',
    playIconColor: 'text-[#15803d]',
    badgeBg: 'bg-emerald-600/30',
    description:
      'O Prof. Rafael desmistifica as Leis da Termodinâmica: calor, trabalho realizado por gases ideais, conservação de energia e os limites impostos pelo Ciclo de Carnot na engenharia térmica.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Primeira Lei da Termodinâmica',
        summary: 'A conservação de energia: variação de energia interna ΔU = Q - W.',
      },
      {
        timeInSeconds: 830,
        label: 'Transformações Gasosas Notáveis',
        summary: 'Isotérmica, isobárica, isocórica e adiabática com o Prof. Rafael.',
      },
    ],
    summaryPoints: [
      'Numa transformação adiabática não há troca de calor com o meio externo (Q = 0).',
      'Em transformação isotérmica, a temperatura não varia, logo ΔU = 0.',
      'O rendimento máximo de uma máquina térmica é determinado pelo Ciclo de Carnot.',
    ],
    exercises: [
      {
        id: 'ex-fis-1',
        question: 'Em uma transformação adiabática sofrida por um gás ideal, qual é a relação correta entre a variação da energia interna (ΔU) e o trabalho realizado (W)?',
        options: ['ΔU = W', 'ΔU = -W', 'ΔU = 0', 'W = 0'],
        correctIndex: 1,
        explanation: 'Como Q = 0 na transformação adiabática, pela Primeira Lei (ΔU = Q - W) temos ΔU = -W.',
      },
    ],
    materials: [
      {
        id: 'mat-fis-1',
        title: 'Formulário de Termodinâmica & Gráficos - Prof. Rafael.pdf',
        type: 'pdf',
        size: '3.3 MB',
        pages: 14,
      },
    ],
  },

  // 12. QUÍMICA - Profa. Gabriela
  {
    id: 'aula-quimica',
    key: 'quimica',
    area: 'natureza',
    areaTitle: 'Ciências da Natureza',
    subject: 'Química',
    title: 'QUÍMICA',
    professorRole: 'Professora',
    professorName: 'Profa. Gabriela',
    professorRaw: 'gabriela',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Termoquímica, Entalpia e Funções Orgânicas Oxigenadas',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    hexColor: '#22C55E',
    playIconColor: 'text-[#15803d]',
    badgeBg: 'bg-emerald-600/30',
    description:
      'A Profa. Gabriela ensina o cálculo de variação de entalpia (Lei de Hess), energia de ligação e o reconhecimento de álcoois, éteres, aldeídos e cetonas na química aplicada.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Reações Exotérmicas e Endotérmicas',
        summary: 'Gráficos de entalpia e absorção/liberação de calor com a Profa. Gabriela.',
      },
      {
        timeInSeconds: 860,
        label: 'A Lei de Hess e Energia de Ligação',
        summary: 'Como somar equações termoquímicas para obter a entalpia global.',
      },
    ],
    summaryPoints: [
      'Reação endotérmica absorve calor: ΔH > 0.',
      'Reação exotérmica libera calor: ΔH < 0.',
      'Lei de Hess: a variação de entalpia depende exclusivamente dos estados inicial e final.',
    ],
    exercises: [
      {
        id: 'ex-qui-1',
        question: 'A queima completa de 1 mol de gás metano (CH4) libera aproximadamente 890 kJ de calor. Portanto, esta reação é:',
        options: [
          'Endotérmica, com ΔH = +890 kJ/mol',
          'Exotérmica, com ΔH = -890 kJ/mol',
          'Isotérmica, sem alteração de energia',
          'Apenas uma transformação física sem liberação de energia',
        ],
        correctIndex: 1,
        explanation: 'Combustões liberam calor para o ambiente, sendo reações exotérmicas com ΔH negativo.',
      },
    ],
    materials: [
      {
        id: 'mat-qui-1',
        title: 'Roteiro de Termoquímica e Funções - Profa. Gabriela.pdf',
        type: 'pdf',
        size: '3.8 MB',
        pages: 18,
      },
    ],
  },
];

// 4 Daily Class Schedule cards for Home Screen (as shown in the reference video)
export const LESSONS_DATA: LessonItem[] = [
  // 1. HUMANAS (Matheus, Tatiana, Katia e Olivia)
  {
    id: 'aula-humanas-1',
    key: 'humanas',
    area: 'humanas',
    areaTitle: 'Ciências Humanas',
    subject: 'Humanas (Geografia, História, Sociologia e Filosofia)',
    title: 'HUMANAS',
    professorRole: 'Professores',
    professorName: 'Matheus, Tatiana, Katia e Olivia',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Geopolítica, Sociedade, Cidadania e Pensamento Crítico',
    themeBg: 'bg-[#007AFF]',
    accentColor: '#007AFF',
    hexColor: '#007AFF',
    playIconColor: 'text-[#005bb5]',
    badgeBg: 'bg-blue-600/30',
    description:
      'Nesta aula integrada de Ciências Humanas da Escola SESI, reunimos os professores Matheus (Geografia), Tatiana (História), Katia (Sociologia) e Olivia (Filosofia) para debater as transformações geopolíticas, o Brasil Império e a cidadania contemporânea.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Geografia: Geopolítica & Território • Prof. Matheus',
        summary: 'Dinâmicas populacionais e fluxos migratórios recentes.',
      },
      {
        timeInSeconds: 620,
        label: 'História: Brasil Império & Sociedade • Profa. Tatiana',
        summary: 'Marcos históricos e constitucionais do Segundo Reinado.',
      },
      {
        timeInSeconds: 1540,
        label: 'Sociologia: Cidadania & Movimentos • Profa. Katia',
        summary: 'Estruturas sociais e direitos fundamentais.',
      },
      {
        timeInSeconds: 2280,
        label: 'Filosofia: Ética e Política Moderna • Profa. Olivia',
        summary: 'Dilemas éticos e o contrato social.',
      },
    ],
    summaryPoints: [
      'Geografia (Prof. Matheus): Dinâmicas populacionais e geopolítica contemporânea.',
      'História (Profa. Tatiana): Segundo Reinado brasileiro e a crise da monarquia.',
      'Sociologia (Profa. Katia): Cidadania e novas manifestações culturais.',
      'Filosofia (Profa. Olivia): Ética, moral e filosofia política moderna.',
    ],
    exercises: [
      {
        id: 'ex-hum-1',
        question:
          'Qual princípio fundamenta a universalidade dos Direitos Humanos segundo os tratados pós-1948?',
        options: [
          'A vinculação exclusiva à cidadania de países desenvolvidos',
          'A dignidade intrínseca a todos os membros da família humana',
          'A dependência de critérios estritamente econômicos',
          'A subordinação irrestrita às leis consuetudinárias locais',
        ],
        correctIndex: 1,
        explanation:
          'O preâmbulo da Declaração Universal de 1948 reconhece a dignidade inerente e os direitos iguais e inalienáveis de todos os seres humanos.',
      },
    ],
    materials: [
      {
        id: 'mat-hum-1',
        title: 'Caderno Integrado de Humanas - Matheus, Tatiana, Katia e Olivia.pdf',
        type: 'slides',
        size: '5.4 MB',
        pages: 32,
      },
    ],
  },

  // 2. NATUREZA (Camila, Rafael e Gabriela)
  {
    id: 'aula-natureza-1',
    key: 'natureza',
    area: 'natureza',
    areaTitle: 'Ciências da Natureza',
    subject: 'Natureza (Biologia, Física e Química)',
    title: 'NATUREZA',
    professorRole: 'Professores',
    professorName: 'Camila, Rafael e Gabriela',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Termodinâmica, Biologia Celular e Reações Químicas',
    themeBg: 'bg-[#22C55E]',
    accentColor: '#22C55E',
    hexColor: '#22C55E',
    playIconColor: 'text-[#15803d]',
    badgeBg: 'bg-emerald-600/30',
    description:
      'Uma imersão prática em Ciências da Natureza ministrada pelos professores Camila (Biologia), Rafael (Física) e Gabriela (Química): processos termodinâmicos, estruturas celulares e equilíbrio químico na indústria.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Biologia: Estrutura Celular • Profa. Camila',
        summary: 'Transporte de membrana e respiração celular.',
      },
      {
        timeInSeconds: 780,
        label: 'Física: Leis da Termodinâmica • Prof. Rafael',
        summary: 'Relação entre calor trocado, trabalho e energia interna.',
      },
      {
        timeInSeconds: 1620,
        label: 'Química: Termoquímica & Entalpia • Profa. Gabriela',
        summary: 'Cálculo de variação de entalpia e reações exotérmicas.',
      },
    ],
    summaryPoints: [
      'Biologia (Profa. Camila): Membrana plasmática e metabolismo celular.',
      'Física (Prof. Rafael): Primeira e Segunda Leis da Termodinâmica.',
      'Química (Profa. Gabriela): Balanço energético e Lei de Hess.',
    ],
    exercises: [
      {
        id: 'ex-nat-1',
        question:
          'Em uma transformação isobárica de um gás ideal, o que ocorre com o volume se a temperatura absoluta for duplicada?',
        options: [
          'O volume é reduzido pela metade',
          'O volume permanece constante',
          'O volume também duplica',
          'O volume quadruplica instantaneamente',
        ],
        correctIndex: 2,
        explanation:
          'Pela Lei de Charles e Gay-Lussac (V/T = constante a pressão fixa), volume e temperatura absoluta são diretamente proporcionais.',
      },
    ],
    materials: [
      {
        id: 'mat-nat-1',
        title: 'Roteiro Integrado de Natureza - Camila, Rafael e Gabriela.pdf',
        type: 'pdf',
        size: '4.7 MB',
        pages: 26,
      },
    ],
  },

  // 3. LINGUAGENS / PORTUGUÊS (Regina, Marcão, Iracema e Folks)
  {
    id: 'aula-portugues-1',
    key: 'portugues',
    area: 'linguagens',
    areaTitle: 'Linguagens e Códigos',
    subject: 'Linguagens (Português, Artes, Ed. Física e Inglês)',
    title: 'PORTUGUÊS',
    professorRole: 'Professores',
    professorName: 'Regina, Marcão, Iracema e Folks',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Coesão Textual, Expressão Artística e Leitura Global',
    themeBg: 'bg-[#F97316]',
    accentColor: '#F97316',
    hexColor: '#F97316',
    playIconColor: 'text-[#c2410c]',
    badgeBg: 'bg-orange-600/30',
    description:
      'Aula de Linguagens da Escola SESI com o corpo docente: Profa. Regina (Português), Prof. Marcão (Artes), Profa. Iracema (Ed. Física) e Prof. Folks (Inglês), cobrindo redação, história da arte, ergonomia e língua inglesa.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Português: Redação Nota 1000 • Profa. Regina',
        summary: 'Operadores argumentativos e proposta de intervenção.',
      },
      {
        timeInSeconds: 750,
        label: 'Artes: Vanguardas Modernistas • Prof. Marcão',
        summary: 'A Semana de 22 e linguagens visuais.',
      },
      {
        timeInSeconds: 1520,
        label: 'Ed. Física: Ergonomia e Saúde • Profa. Iracema',
        summary: 'Fisiologia do exercício e hábitos corporais saudáveis.',
      },
      {
        timeInSeconds: 2200,
        label: 'Inglês: Reading Comprehension • Prof. Folks',
        summary: 'Técnicas de skimming e scanning para exames.',
      },
    ],
    summaryPoints: [
      'Português (Profa. Regina): Coesão e argumentação na redação.',
      'Artes (Prof. Marcão): Ruptura das vanguardas europeias.',
      'Ed. Física (Profa. Iracema): Fisiologia do movimento.',
      'Inglês (Prof. Folks): Interpretação e vocabulário contextualizado.',
    ],
    exercises: [
      {
        id: 'ex-port-1',
        question:
          'Qual dos seguintes conectivos estabelece semanticamente uma relação de oposição/ressalva entre orações?',
        options: ['Porquanto', 'Contudo', 'Portanto', 'Visto que'],
        correctIndex: 1,
        explanation:
          '"Contudo" é uma conjunção adversativa, indicando contraste ou quebra de expectativa.',
      },
    ],
    materials: [
      {
        id: 'mat-port-1',
        title: 'Guia de Linguagens - Regina, Marcão, Iracema e Folks.pdf',
        type: 'pdf',
        size: '3.9 MB',
        pages: 20,
      },
    ],
  },

  // 4. MATEMÁTICA (Vilson)
  {
    id: 'aula-matematica-1',
    key: 'matematica',
    area: 'matematica',
    areaTitle: 'Matemática',
    subject: 'Matemática',
    title: 'MATEMATICA',
    professorRole: 'Professor',
    professorName: 'Prof. Vilson',
    professorRaw: 'vilson',
    duration: '45 Min.',
    durationSeconds: 2700,
    date: '26 de out. de 2026',
    topic: 'assunto: Geometria Espacial - Prismas, Cilindros e Volumes',
    themeBg: 'bg-[#EF4444]',
    accentColor: '#EF4444',
    hexColor: '#EF4444',
    playIconColor: 'text-[#b91c1c]',
    badgeBg: 'bg-red-600/30',
    description:
      'Aula prática e visual ministrada pelo Prof. Vilson sobre sólidos geométricos: cálculo de área superficial, cálculo de volume de prismas e cilindros retos, e resolução de situações-problema aplicadas à engenharia e ao cotidiano.',
    chapters: [
      {
        timeInSeconds: 0,
        label: 'Revisão de Geometria Plana',
        summary: 'Áreas de triângulos, polígonos regulares e círculos com o Prof. Vilson.',
      },
      {
        timeInSeconds: 610,
        label: 'Prismas: Nomenclatura e Volume',
        summary: 'Fórmula universal V = Ab * h e planificação.',
      },
      {
        timeInSeconds: 1530,
        label: 'Cilindros e Sólidos de Revolução',
        summary: 'Relação com círculos e área lateral desdobrada.',
      },
      {
        timeInSeconds: 2250,
        label: 'Resolução de Desafios do Vestibular',
        summary: 'Problemas de capacidade e vazão de reservatórios com o Prof. Vilson.',
      },
    ],
    summaryPoints: [
      'Professor de Matemática: Prof. Vilson.',
      'Volume do Prisma: V = Área da Base × Altura (V = Ab · h).',
      'Volume do Cilindro Reto: V = π · r² · h.',
      'Conversão essencial de unidades de volume: 1 m³ = 1000 L, 1 dm³ = 1 L, 1 cm³ = 1 mL.',
    ],
    exercises: [
      {
        id: 'ex-mat-1',
        question:
          'Um reservatório cilíndrico tem raio da base medindo 2 m e altura de 3 m. Adotando π = 3,14, qual é a sua capacidade máxima aproximada em litros?',
        options: [
          '3.768 litros',
          '37.680 litros',
          '18.840 litros',
          '376.800 litros',
        ],
        correctIndex: 1,
        explanation:
          'V = π · r² · h = 3,14 · 2² · 3 = 3,14 · 4 · 3 = 37,68 m³. Como 1 m³ = 1.000 L, 37,68 × 1.000 = 37.680 litros.',
      },
    ],
    materials: [
      {
        id: 'mat-mat-1',
        title: 'Formulário Completo de Geometria Espacial - Prof. Vilson.pdf',
        type: 'pdf',
        size: '1.8 MB',
        pages: 6,
      },
      {
        id: 'mat-mat-2',
        title: 'Lista de Exercícios Resolvidos SESI.pdf',
        type: 'pdf',
        size: '4.2 MB',
        pages: 18,
      },
    ],
  },
];
