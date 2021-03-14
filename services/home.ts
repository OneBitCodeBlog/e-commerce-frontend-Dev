import api from './api';
import HomeIndexData from '../dtos/HomeIndexData';

const HomeService = {
  index: (url: string) => {
    return api.get<HomeIndexData>(url).then(response => response.data);
  }
}

export default HomeService;