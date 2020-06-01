import { ProductPage } from '../product-page';

export const carbon: ProductPage = {
  productId: 1,
  name: 'Zen Sleep Dynamic Cell&trade; Carbon Active',
  // price: 299.90,
  price: 10.00,
  images: [
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/carvao-ativado_01--3-4.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/carvao-ativado_01--3-4.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/carvao-ativado_02-frente.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/carvao-ativado_02-frente.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/carvao-ativado_03-front.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/carvao-ativado_03-front.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/carvao-ativado_04-cortado.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/carvao-ativado_04-cortado.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/capa-carbon.png',
      thumbnail:
        'https://zen-sleep.s3.amazonaws.com/images/product/carbon/capa-carbon.png',
    },
  ],
  dynamicCellBackground: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/bg-esmuma-exclusiva-carbon%402x.png',
  sections: [
    {
      title:
        'Sensação de maciez, <br/> conforto e o suporte ideal <br/> para a cabeça e o pescoço.',
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/3-laterais-carbon-active%402x.png',
    },
    {
      title: 'Novo design promove <br/> alívio nos pontos de <br/> tensão da cabeça,',
      description:
        'além de garantir um fluxo contínuo de ar <br/> mantendo a temperatura do travesseiro <br/> sempre regulada.',
      image:
        'https://zen-sleep.s3.amazonaws.com/images/product/carbon/dois-topview-carbon-active%402x.png',
    },
    {
      title: 'Inovadora teecnologia <br/> de infusão com Carvão <br/> Ativado Orgânico',
      description:
        'Que regula odores e absorve humidade, <br/>inibindo a formação de Ácaros e Bactérias.',
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/AdobeStock_301687122%402x.png',
    },
  ],
  capa: {
    title: 'Capa Tecido 100% Algodão Natural',
    image: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/capa-carbon.png',
    backgroundColor: '#474545',
    backgroundImage: 'https://zen-sleep.s3.amazonaws.com/images/product/carbon/pattern-bg-capa-carvao.svg'
  },
};
