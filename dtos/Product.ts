import Category from './Category';
import SystemRequirement from './SystemRequirement';

export default interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  status: string;
  image_url: string;
  productable: string;
  mode: string;
  developer: string;
  release_date: string;
  categories: Category[];
  system_requirement: SystemRequirement;
};