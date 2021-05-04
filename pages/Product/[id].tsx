import { Col, Row, Badge } from 'react-bootstrap';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import MainComponent from '../../components/shared/MainComponent';

import styles from './styles.module.css';

import BlueBackground from '../../components/shared/BlueBackground';
import StyledButton from '../../components/shared/StyledButton';

import useSwr from 'swr';
import { useRouter } from 'next/router';
import ProductShowService from '../../services/productShow';

import { toast } from 'react-toastify';
import { format, parseJSON } from 'date-fns';

import ProductShowData from '../../dtos/ProductShowData';

import LoggedService from '../../util/LoggedService';
import WishlistService from '../../services/wishlist';

import { useDispatch } from 'react-redux';
import { addCartProduct } from '../../store/modules/storefront/cartProducts/reducer';

const Product: React.FC<ProductShowData> = ({ product }) => {
  const router = useRouter();
  const { data, error } = useSwr(
    `/storefront/v1/products/${router?.query?.id}`, 
    ProductShowService.show,
    { initialData: product }
  );

  const dispatch = useDispatch();

  if (error) {
    toast.error('Erro ao obter o produto');
    console.log(error);
  }

  const handleWishitem = async (): Promise<void> => {
    if (LoggedService.execute()) {
      try {
        await WishlistService.add(data?.id);
        toast.info('Adicionado a sua lista de desejos!');
      } catch (error) {
        toast.error('Erro ao adicionar a sua lista de desejos.');
        console.log(error);
      }

      return;
    }

    router.push({
      pathname: '/Auth/Login',
      query: {
        callback: router.pathname.replace('[id]', data?.id.toString())
      }
    });
  }

  return (
    <MainComponent>
      <Row className="mt-4 mb-4">
        <Col md={6}>
          <img 
            className="w-100"
            src={data?.image_url} 
            alt={data?.name}
          />

          <div className="mt-3">
            <h6 className={styles.subtitle}>Sobre o Jogo</h6>

            <p>{data?.description}</p>

            <ul className={styles.list}>
              <li>
                <strong>Desenvolvedora:</strong>
                <span>{data?.developer}</span>
              </li>

              <li>
                <strong>Modo:</strong>
                <span>{data?.mode}</span>
              </li>

              <li>
                <strong>Status:</strong>
                <span>{data?.status === 'available' ? 'Disponível' : 'Indisponível'}</span>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <BlueBackground>
            <Row className="mb-4">
              <Col>
                <h1 className={styles.title}>{data?.name}</h1>

                <div>
                  {
                    data?.categories?.map(
                      category => 
                        <Badge 
                          variant="primary ml-1" 
                          className={styles.primary_badge}
                        >
                          {category.name}
                        </Badge>
                    )
                  }
                </div>
              </Col>

              <Col>
                <strong className="float-right">{`R$ ${data?.price}`}</strong>
              </Col>
            </Row>

            <Row className={styles.mb_50}>
              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>LANÇAMENTO</Badge>
                <p>
                  {
                    data?.release_date &&
                      format(parseJSON(data.release_date), 'dd/MM/yyyy')
                  }
                </p>
              </Col>

              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>VENDIDO</Badge>
                <p>{data?.sells_count}</p>
              </Col>

              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>FAVORITADO</Badge>
                <p>{data?.favorited_count}</p>
              </Col>
            </Row>

            <hr className={styles.line}/>

            <Row className="mt-4 text-center">
              <Col>
                <StyledButton 
                  className={styles.gray_button} 
                  icon={faHeart} 
                  action="Favoritar" 
                  type_button="red" 
                  onClick={handleWishitem}
                />
              </Col>

              <Col>
                <StyledButton 
                  icon={faCartPlus} 
                  action="Comprar" 
                  type_button="blue" 
                  onClick={() => dispatch(addCartProduct(data))}
                />
              </Col>
            </Row>
          </BlueBackground>

          <div className="mt-4">
            <BlueBackground>
              <strong>Requisitos do sistema</strong>

              <div className="mt-3">
                <ul className={styles.list}>
                  <li>
                    <strong>SO:</strong>
                    <span>{data?.system_requirement.operational_system}</span>
                  </li>

                  <li>
                    <strong>Armazenamento:</strong>
                    <span>{data?.system_requirement.storage}</span>
                  </li>

                  <li>
                    <strong>Processador:</strong>
                    <span>{data?.system_requirement.processor}</span>
                  </li>

                  <li>
                    <strong>Memória:</strong>
                    <span>{data?.system_requirement.memory}</span>
                  </li>

                  <li>
                    <strong>Placa de Vídeo:</strong>
                    <span>{data?.system_requirement.video_board}</span>
                  </li>
                </ul>
              </div>
            </BlueBackground>
          </div>
        </Col>
      </Row>
    </MainComponent>
  );
}

export async function getServerSideProps({ params }) {
  const product = await ProductShowService.show(`/storefront/v1/products/${params.id}`);
  return { props: product };
}

export default Product;