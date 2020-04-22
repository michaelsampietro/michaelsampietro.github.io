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
      {
        question: 'Como vocês empregam os trabalhadores da sua fábrica?',
        answer:
          'Nos orgulhamos em criar relações de longo prazo com os nossos colaboradores, parceiros e nossa comunidade. Mantemos um ambiente inclusivo, ético, colaborativo e garantimos condições de trabalho dignas aos mesmos. Buscamos parceiros que compartilham dos mesmos padrões éticos e de qualidade que a Zen Sleep possui.',
      },
      {
        question: 'Eu tenho alergias. Que produtos você recomendaria?',
        answer:
          'Recomendamos o Travesseiro Zen Sleep Dynamic Cell™ Carbon Active, que possui a propriedade de absorver impurezas, inibindo a proliferação de ácaros, bactérias e ajuda aliviar os sintomas de alergia.',
      },
      {
        question: 'Qual é a diferença entre defeito e dano?',
        answer:
          'O defeito ocorre durante o processo de fabricação do produto, já o dano é o resultado do uso inadequado do produto.',
      },
      {
        question: 'Como posso solicitar um pedido de garantia?',
        answer:
          'Envie um e-mail para <b>atendimento@zensleep.com.br</b> ou entre em contato através do <a href="tel:+55-11-4622-2875">Tel.:(11) 4622-2875</a> para solicitar um pedido de garantia. Por favor, tenha em mãos a cópia da Nota Fiscal de compra.',
      },
    ],
  },

  {
    section: 'Travesseiros / Geral',
    questions: [
      {
        question: 'Como é que eu escolho o travesseiro certo para mim?',
        answer:
          'Todos os travesseiros Zen Sleep oferecem conforto e proporcionam um apoio adequado ao pescoço, a cabeça e a coluna. <br/> Escolha dentre os benefícios exclusivos que eles oferecem o qual você se identifica mais.',
      },
      {
        question:
          'Os travesseiros da Zen Sleep funcionam bem para quem dorme de lado, de bruços ou de barriga para cima?',
        answer:
          // tslint:disable-next-line: max-line-length
          'Devido a sua espuma de alta qualidade e resiliência que se adapta ao corpo, eles são indicados para todas as posições de dormir.',
      },
      {
        question: 'Por que o travesseiro de vocês tem buracos?',
        answer:
          'O nosso design exclusivo cria a combinação ideal de conforto, os furos no centro do travesseiro, otimizam o fluxo de ar e criam uma zona de alívio de pontos de tensão na cabeça.',
      },
    ],
  },
  {
    section: 'Materiais',
    questions: [
      {
        question:
          'Como é que a espuma Dynamic Cell™ se compara à espuma tradicional?',
        answer:
          'A nossa espuma inovadora e exclusiva, Dynamic Cell™ oferece suporte excepcional e muito mais conforto do que a espuma típica do mercado.',
      },
      {
        question: 'Quais são os benefícios da sua espuma Dynamic Cell™?',
        answer:
          'A nossa espuma inovadora e exclusiva Dynamic Cell™ adapta- se aos contornos da sua cabeça e ombros para o perfeito equilíbrio entre conforto e suporte.',
      },
      {
        question: 'O que são óleos essenciais?',
        answer:
          'Óleos essenciais são compostos voláteis extraídos de plantas aromáticas por processos de destilação ou compressão, de forma a se obter todos os benefícios e mantendo as características naturais das plantas.',
      },
      {
        question: 'Vocês misturam óleos essenciais nos travesseiros?',
        answer:
          'Sim. Criamos um processo único e exclusivo para extrair os benefícios dos óleos essenciais e da Aromaterapia nos travesseiros. Nosso modelo Zen Sleep Dynamic Cell™ French Lavanda possui a infusão de óleo.',
      },
      {
        question: 'Quais são os benefícios do Travesseiro de Lavanda?',
        answer:
          'O travesseiro Zen Sleep Dynamic Cell™ French Lavanda, une os benefícios da Aromaterapia Lavanda, utilizada a séculos para ajudar no tratamento de ansiedade e insônia, ela possui efeito calmante promovendo uma sensação única de relaxamento e bem-estar.',
      },
      {
        question: 'Vocês infundem outros elementos nos travesseiros?',
        answer:
          'Sim. O modelo Zen Sleep Dynamic Cell™ Carbon Active é infundido com carvão ativado e o modelo Zen Sleep Dynamic Cell™ Aloe Vera contém extrato de Aloe Vera em sua composição.',
      },
      {
        question: 'Quais são os benefícios do Travesseiro de Carvão Ativado?',
        answer:
          'O carvão ativado tem muitos benefícios conhecidos, elimina odores, absorve o excesso de umidade, regula a temperatura e é uma excelente escolha para pessoas com alergias, em função da sua propriedade de absorver impurezas, inibindo a proliferação de ácaros e bactérias.',
      },
      {
        question: 'Quais são os benefícios do Travesseiro de Aloe Vera?',
        answer:
          'O extrato natural de Aloe Vera é rico em vitaminas C, E, do complexo B, Ácido Fólico, de minerais, aminoácidos essenciais e polissacarídeos, que estimulam no crescimento dos tecidos e auxiliam na regeneração das células. Os benefícios da Aloe Vera, também são relacionados a Saúde e a Beleza, sendo muito conhecida por seus efeitos calmantes, cicatrizantes, hidratantes e revitalizantes, além de possuir alto poder antioxidante, que auxilia no combate aos radicais livres e na desintoxicação corporal.',
      },
    ],
  },
  {
    section: 'Garantias e cuidados',
    questions: [
      {
        question: 'Como eu limpo e conservo meu travesseiro?',
        answer:
          'Para maiores informações e dicas sobre Uso e Conservação do Travesseiro acesse a página Informações de Produtos.',
      },
      {
        question: 'O que está coberto pela garantia?',
        answer:
          'Por favor visite a página de Informações de Produtos e selecione o produto que você deseja obter informações sobre garantia.',
      },
    ],
  },
];
