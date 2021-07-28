import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import MainComponent from '../../components/shared/MainComponent';
import Menu from '../../components/Storefront/Menu';
import Product from '../../components/Storefront/Product';

import ProductLicensesModal from '../../components/Storefront/ProductLicensesModal';
import withAuth from '../../components/withAuth';

import GamesService from '../../services/games';
import useSwr from 'swr';
import { toast } from 'react-toastify';

import Game from '../../dtos/Game';

const Games: React.FC = () => {
  const[show, setShow] = useState(false);
  const[selectedProduct, setSelectedProduct] = useState<Game>();

  const { data, error } = useSwr('/storefront/v1/games', GamesService.index);

  if (error) {
    toast.error('Erro ao obter os seus jogos.');
    console.log(error);
  }

  const handleProductClick = (id: number): void => {
    handleShow();
    setSelectedProduct(data?.find(game => game.id === id));
  }

  const handleShow = (): void => {
    setShow(!show);
  }

  return (
    <MainComponent>
      <Menu tab="my_games"/>

      <Row>
        {
          data?.map(
            product =>
              <Col 
                md={3} 
                sm={6} 
                xs={12}
                key={product.id}
              >
                <Product 
                  product={product}
                  onClick={() => handleProductClick(product?.id)}
                />
              </Col>
          )
        }
      </Row>

      <ProductLicensesModal
        show={show}
        onHide={handleShow}
        selectedProduct={selectedProduct}
      />
    </MainComponent>
  );
}

export default withAuth(Games);