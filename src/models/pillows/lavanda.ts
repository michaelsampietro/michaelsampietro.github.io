import { ProductPage } from '../product-page';

export const lavanda: ProductPage = {
  productId: 2,
  name: 'Zen Sleep Dynamic Cell&trade; French Lavanda',
  price: 120.3,
  images: [
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/Lavanda_01-3-4-.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/Lavanda_01-3-4-.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/Lavanda_02-frente.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/Lavanda_02-frente.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/Lavanda_03-front.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/Lavanda_03-front.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/Lavanda_04-3-4-Lavanda.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/Lavanda_04-3-4-Lavanda.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/capa-lavanda.png',
      thumbnail:
        'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/capa-lavanda.png',
    },
  ],
  dynamicCellBackground: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/bg-esmuma-exclusiva-lavanda%402x.png',
  sections: [
    {
      title:
        'Sensação de maciez, <br/> conforto e o suporte ideal <br/> para a cabeça e o pescoço.',
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/3-laterais-lavanda%402x.png',
    },
    {
      title: 'Novo design promove <br/> alívio nos pontos de <br/> tensão da cabeça,',
      description:
        'além de garantir um fluxo contínuo de ar <br/> mantendo a temperatura do travesseiro <br/> sempre regulada.',
      image:
        'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/dois-topview-lavanda%402x.png',
    },
    {
      title: 'Inovadora tecnologia de <br/> infusão com Óleo Essencial <br/> de Lavanda Francesa',
      description: 'que proporciona uma sensação única <br/> de relaxamento e bem-estar.',
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/lavanda%402x.png',
    },
    {
      title: 'Acompanha Pillow <br/> Spray French Lavanda',
      description: 'para prolongar os benefícios e a sensação <br/> de bem-estar por muitas noites.',
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/spray-com-sombra%402x.png',
      imageCss: {
        height: '417px',
        margin: '0 auto'
      }
    },
  ],
  capa: {
    title: 'Capa Tecido 100% Algodão Natural',
    image: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/capa-lavanda.png',
    backgroundColor: '#A872A3',
    backgroundImage: 'https://zen-sleep.s3.amazonaws.com/images/product/lavanda/pattern-bg-capa-lavanda.svg'
  },
};
