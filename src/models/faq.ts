export interface Faq {
  section: string;
  questions: Question[];
}

export interface Question {
  question: string;
  answer: string;
}

export const FaqQuestions = [
  {
    section: 'Geral',
    questions: [
      {
        question:
          'Me preocupo com o meio ambiente. Quão sustentáveis são os seus produtos e processos?',
        answer:
          'Somos uma empresa consciente e responsável, nossos travesseiros são atóxicos e produzidos com a última tecnologia de gás HFO, que não agride o meio ambiente e a camada de ozônio. Utilizamos matérias primas de alta qualidade e estamos sempre buscando materiais inovadores, tecnologias, novos processos que sejam sustentáveis, que causam o mínimo impacto ambiental possível, para criar produtos de alta qualidade, seguros para você e para o meio ambiente.',
      },
      {
        question:
          'Como funciona a política de descarte sustentável da Zen Sleep?',
        answer:
          'Acreditamos que nossa responsabilidade vai além de desenvolver produtos com tecnologia e qualidade. Somos todos responsáveis pelo impacto que causamos ao meio ambiente e ao planeta, sendo assim, criamos uma política de descarte sustentável, de modo que nos comprometamos a recolher o seu travesseiro antigo, garantindo a destinação correta do mesmo.',
      },
    ],
  },
  {
    section: 'Travesseiros / Geral',
    questions: [
      {
        question:
          'Me preocupo com o meio ambiente. Quão sustentáveis são os seus produtos e processos?',
        answer:
          'Somos uma empresa consciente e responsável, nossos travesseiros são atóxicos e produzidos com a última tecnologia de gás HFO, que não agride o meio ambiente e a camada de ozônio. Utilizamos matérias primas de alta qualidade e estamos sempre buscando materiais inovadores, tecnologias, novos processos que sejam sustentáveis, que causam o mínimo impacto ambiental possível, para criar produtos de alta qualidade, seguros para você e para o meio ambiente.',
      },
      {
        question:
          'Como funciona a política de descarte sustentável da Zen Sleep?',
        answer:
          'Acreditamos que nossa responsabilidade vai além de desenvolver produtos com tecnologia e qualidade. Somos todos responsáveis pelo impacto que causamos ao meio ambiente e ao planeta, sendo assim, criamos uma política de descarte sustentável, de modo que nos comprometamos a recolher o seu travesseiro antigo, garantindo a destinação correta do mesmo.',
      },
    ],
  },
];
