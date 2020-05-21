import { ProductPage } from '../product-page';

export const pure: ProductPage = {
  productId: 4,
  name: 'Zen Sleep Dynamic Cell&trade; Carbon Active',
  price: 120.3,
  images: [
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/pure_01-3-4.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/pure_01-3-4.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/pure_02-frente.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/pure_02-frente.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/pure_03-front.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/pure_03-front.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/pure_04-3-4-cortado.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/pure_04-3-4-cortado.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/capa-pure.png',
      thumbnail:
        'https://zen-sleep.s3.amazonaws.com/images/product/pure/capa-pure.png',
    },
  ],
  dynamicCellBackground: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/bg-esmuma-exclusiva-pure%402x.png',
  sections: [
    {
      title: 'Sensação de maciez, <br/> conforto e o suporte ideal <br/> para a cabeça e o pescoço.',
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/3-laterais-pure%402x.png',
    },
    {
      title: 'Novo design promove <br/> alívio nos pontos de <br/> tensão da cabeça,',
      description: 'além de garantir um fluxo contínuo de ar <br/> mantendo a temperatura do travesseiro <br/> sempre regulada.',
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/dois-topview-pure%402x.png',
    },
  ],
  capa: {
    title: 'Capa Tecido 100% Algodão Natural',
    image: 'https://zen-sleep.s3.amazonaws.com/images/product/pure/capa-pure.png',
    backgroundColor: '#AF9A6B'
  },
};
