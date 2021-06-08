import ProductShow from '../dtos/ProductShow';
import CheckoutItem from '../dtos/CheckoutItem';

const AggregateItemsService = {
  execute(cartProducts: ProductShow[]): CheckoutItem[] {
    const checkoutItems = cartProducts.map(
      checkoutItem => checkoutItem.id
    ).filter(
      (checkoutItem, index, self) =>
        self.indexOf(checkoutItem) === index
    );

    const items = checkoutItems.map(
      product_id => ({
        product_id,
        quantity: cartProducts
          .filter(product => product.id === product_id).length
      })
    );

    return items;
  }
}

export default AggregateItemsService;