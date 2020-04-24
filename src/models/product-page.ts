export interface ProductPage {
  productId: number;
  name: string;
  price: number;
  images: ProductImage[];
  sections: ProductSection[];
  capa: ProductSection;
}

interface ProductSection {
  title: string;
  description?: string;
  image: string;
}

interface ProductImage {
  image: string;
  thumbnail: string;
}

export const carbon: ProductPage = {
  productId: 1,
  name: 'Zen Sleep Dynamic Cell&trade; Carbon Active',
  price: 120.30,
  images: [
    {
      image: '../assets/images/product/carbon/miniaturas/normal@2x.png',
      thumbnail: '../assets/images/product/carbon/miniaturas/normal@2x.png',
    },
    {
      image: '../assets/images/product/carbon/miniaturas/lateral@2x.png',
      thumbnail: '../assets/images/product/carbon/miniaturas/lateral@2x.png',
    },
    {
      image: '../assets/images/product/carbon/miniaturas/top@2x.png',
      thumbnail: '../assets/images/product/carbon/miniaturas/top@2x.png',
    },
    {
      image: '../assets/images/product/carbon/miniaturas/cortado@2x.png',
      thumbnail: '../assets/images/product/carbon/miniaturas/cortado@2x.png',
    },
    {
      image: '../assets/images/product/carbon/miniaturas/capa-carbon@2x.png',
      thumbnail: '../assets/images/product/carbon/miniaturas/capa-carbon@2x.png',
    },
  ],
  sections: [
    {
      title:
        'Sensação de maciez e conforto Soft Touch e suporte adequado para cabeça e pescoço.',
      image: '../assets/images/product/carbon/3-laterais-carbon-active@2x.png',
    },
    {
      title:
        'Novo design promove alívio nos pontos de tensão da cabeça,',
      description: 'além de garantir um fluxo contínuo de ar mantendo a temperatura do travesseiro sempre regulada.',
      image: '../assets/images/product/carbon/dois-topview-carbon-active@2x.png',
    },
    {
      title:
        'Inovadora fórmula com Carvão Ativado Orgânico',
      description: 'que Absorve Umidade, Regula Odores, Inibe a Formação de Ácaros e Bactérias, sendo recomendado para pessoas com alergia.',
      image: '../assets/images/product/carbon/carbon@2x.png',
    },
  ],
  capa: {
    title: 'Capa Tecido 100% Algodão Natural',
    image: '../assets/images/product/carbon/capa-carbon-1@2x.png',
  }
};
