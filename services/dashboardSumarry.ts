import api from './api';

interface DashboardSummary {
  summary: {
    orders: number;
    products: number;
    profit: number;
    users: number;
  }
}

const DashboardSummaryService = {
  index(url: string) {
    return api.get<DashboardSummary>(url).then(resp => resp.data.summary);
  }
}

export default DashboardSummaryService;