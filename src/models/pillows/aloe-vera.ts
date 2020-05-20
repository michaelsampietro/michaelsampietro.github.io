import { ProductPage } from '../product-page';

export const aloeVera: ProductPage = {
  productId: 3,
  name: 'Zen Sleep Dynamic Cell&trade; Aloe Vera',
  price: 120.3,
  images: [
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/imagens/aloe-vera_01-3-4.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/imagens/aloe-vera_01-3-4.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/imagens/aloe-vera_02-frente.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/imagens/aloe-vera_02-frente.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/imagens/aloe-vera_03-front.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/imagens/aloe-vera_03-front.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/imagens/aloe-vera_04-3-4-cortado.png',
      thumbnail: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/imagens/aloe-vera_04-3-4-cortado.png',
    },
    {
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/imagens/capa-aloe-vera.png',
      thumbnail:
        'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/imagens/capa-aloe-vera.png',
    },
  ],
  dynamicCellBackground: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/grande-aloe-vera%402x.png',
  sections: [
    {
      title:
        'Sensação de maciez, conforto e o suporte ideal para a cabeça e o pescoço.',
      image: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/secoes/3-laterais-aloe-vera%402x.png',
    },
    {
      title: 'Novo design promove alívio nos pontos de tensão da cabeça,',
      description:
        'além de garantir um fluxo contínuo de ar mantendo a temperatura do travesseiro sempre regulada.',
      image:
        'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/secoes/dois-topview-aloe-vera%402x.png',
    },
    {
      title: 'Inovadora tecnologia de infusão com Extrato Natural de Aloe Vera',
      description:
        'Possui alto poder antioxidante e auxilia no combate aos radicais livres e na desintoxicação corporal.',
      image: 'https://zen-sleep.s3.amazonaws.com/images/home/ice@2x.png',
    },
  ],
  capa: {
    title: 'Capa Tecido 100% Algodão Natural',
    image: 'https://zen-sleep.s3.amazonaws.com/images/product/aloe-vera/imagens/capa-aloe-vera.png',
    backgroundColor: '#669E6C'
  },
};
