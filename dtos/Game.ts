import Product from './Product';

type Game = {
  licenses: string[];
} & Pick<Product, 'id' | 'name' | 'description' | 'image_url'>;

export default Game;