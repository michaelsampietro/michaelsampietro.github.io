export interface ProductPage {
  productId: number;
  name: string;
  price: number;
  dynamicCellBackground?: string;
  images: ProductImage[];
  sections: ProductSection[];
  capa: ProductSection;
}

interface ProductSection {
  title: string;
  description?: string;
  image: string;
  backgroundColor?: string;
  imageCss?: any;
}

interface ProductImage {
  image: string;
  thumbnail: string;
}
