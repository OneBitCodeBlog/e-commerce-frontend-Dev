import Product from './Product';

type ProductSearch = 
  Pick<Product, 'id' | 'name' | 'description' | 'price' | 'image_url' | 'categories'>;

export default ProductSearch;