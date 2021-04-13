import MainComponent from '../../components/shared/MainComponent';

import Menu from '../../components/Storefront/Menu';

import useSwr from 'swr';
import WishlistService from '../../services/wishlist';

import { toast } from 'react-toastify';

import WishItem from '../../components/Storefront/WishItem';

const Wishlist: React.FC = () => {
  const { data, error } = useSwr('/storefront/v1/wish_items', WishlistService.index);

  if (error) {
    toast.error('Erro ao obter os games desejados.');
    console.log(error);
  }

  const handleWishlistItemRemoval = async (productId: number): Promise<void> => {

  }

  return (
    <MainComponent>
      <Menu tab="desired_games"/>

    {
      data?.wish_items?.map(
        wish_item =>
          <WishItem
            key={wish_item.id}
            wishItem={wish_item}
            handleWishlistItemRemoval={handleWishlistItemRemoval}
          />
      )
    }
    </MainComponent>
  );
}

export default Wishlist;