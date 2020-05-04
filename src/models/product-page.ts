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
