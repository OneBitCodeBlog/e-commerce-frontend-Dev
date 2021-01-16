import api from './api';
import Product from '../dtos/Product';
import Meta from '../dtos/Meta';

interface ProductsIndexData {
  products: Product[];
  meta: Meta;
}

const ProductsService = {
  index: (url: string) => {
    return api.get<ProductsIndexData>(url).then(response => response.data);
  },

  create: (product: FormData) => {
    return api.post<void>('/admin/v1/products', product);
  },

  update: (product: FormData) => {
    return api.patch<void>(
      `/admin/v1/products/${product.get('product[id]')}`,
      product
    );
  },

  delete: (id: number) => {
    return api.delete<void>(`/admin/v1/products/${id}`);
  }
}

export default ProductsService;