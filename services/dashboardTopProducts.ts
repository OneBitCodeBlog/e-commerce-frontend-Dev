import api from './api';

interface TopProduct {
  image: string;
  product: string;
  quantity: number;
  total_sold: number;
}

interface DashboardTopProduct {
  top_five_products: TopProduct[];
}

const DashboardTopProductService = {
  index(url: string) {
    return api.get<DashboardTopProduct>(url).then(resp => resp.data.top_five_products);
  }
}

export default DashboardTopProductService;