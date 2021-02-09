import Product from './Product';

type ProductHome = 
  Pick<Product, 'id' | 'name' | 'description' | 'price' | 'image_url'>;

export default ProductHome;