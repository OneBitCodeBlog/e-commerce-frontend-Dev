interface ProductSearchServiceParams {
  search: string | string[];
  category?: string | string[];
  price?: string | string[];
  page?: string | string[];
  order?: string | string[];
  direction?: string | string[];
}

const ProductSearchService = {
  execute({
    search,
    category,
    price,
    page,
    order = 'price',
    direction = 'asc'
  }: ProductSearchServiceParams): string {
    let returnStr = `?length=12&order[${order}]=${direction}`;

    if (search) {
      returnStr += `&search=${search}`;
    }

    if (page) {
      returnStr += `&page=${page}`;
    }

    if (category) {
      returnStr += `&category_ids[]=${category}`;
    }

    if (price) {
      let prices = price.toString().split('-');
      returnStr += `&price[min]=${prices[0]}`;

      if (prices.length === 2) {
        returnStr += `&price[max]=${prices[1]}`;
      }
    }

    return returnStr;
  }
}

export default ProductSearchService;