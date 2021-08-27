import api from './api';

interface SalesRangeItem {
  [key: string]: number;
}

interface DashboardSalesRange {
  sales_range: SalesRangeItem[];
}

const DashboardSalesRangeService = {
  index(url: string) {
    return api.get<DashboardSalesRange>(url).then(resp => resp.data.sales_range);
  }
}

export default DashboardSalesRangeService;