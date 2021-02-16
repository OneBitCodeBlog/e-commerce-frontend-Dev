import api from './api';

import ProductSearch from '../dtos/ProductSearch';
import Meta from '../dtos/Meta';

interface SearchIndexData {
  products: ProductSearch[];
  meta: Meta;
}

const SearchService = {
  execute: (url: string) => {
    return api.get<SearchIndexData>(url).then(response => response.data);
  }
}

export default SearchService;
