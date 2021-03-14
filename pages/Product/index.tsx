import { Col, Row, Badge } from 'react-bootstrap';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import MainComponent from '../../components/shared/MainComponent';

import styles from './styles.module.css';

import BlueBackground from '../../components/shared/BlueBackground';
import StyledButton from '../../components/shared/StyledButton';

const Product: React.FC = () => {
  return (
    <MainComponent>
      <Row className="mt-4 mb-4">
        <Col md={6}>
          <img 
            className="w-100"
            src="/assets/product_image.png" 
            alt="Product"
          />

          <div className="mt-3">
            <h6 className={styles.subtitle}>Sobre o Jogo</h6>

            <p>
              Quia hic dolores voluptate aspernatur dolorem iste aut voluptas. Laudantium earum vitae quae nobis ut. Eum dolorum qui quam numquam odit eius.
              Voluptas autem animi nihil. Nihil qui labore ipsum optio tempora impedit. Enim commodi ut voluptate maxime et eos exercitationem blanditiis ut.
              Repellat eaque vel voluptas suscipit voluptatem adipisci quasi qui nesciunt. Optio illo qui enim. Mollitia laborum unde. Cupiditate voluptatem ducimus nam voluptatibus eum. Aut delectus sit et.
            </p>

            <ul className={styles.list}>
              <li>
                <strong>Desenvolvedora:</strong>
                <span>Sony</span>
              </li>

              <li>
                <strong>Modo:</strong>
                <span>pvp</span>
              </li>

              <li>
                <strong>Status:</strong>
                <span>Disponível</span>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <BlueBackground>
            <Row className="mb-4">
              <Col>
                <h1 className={styles.title}>God of War</h1>

                <div>
                  <Badge variant="primary ml-1" className={styles.primary_badge}>Ação</Badge>
                  <Badge variant="primary ml-1" className={styles.primary_badge}>Aventura</Badge>
                  <Badge variant="primary ml-1" className={styles.primary_badge}>Indie</Badge>
                </div>
              </Col>

              <Col>
                <strong className="float-right">R$ 89,90</strong>
              </Col>
            </Row>

            <Row className={styles.mb_50}>
              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>LANÇAMENTO</Badge>
                <p>23/04/2021</p>
              </Col>

              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>VENDIDO</Badge>
                <p>347</p>
              </Col>

              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>FAVORITADO</Badge>
                <p>517 vezes</p>
              </Col>
            </Row>

            <hr className={styles.line}/>

            <Row className="mt-4 text-center">
              <Col>
                <StyledButton className={styles.gray_button} icon={faHeart} action="Favoritar" type_button="red" />
              </Col>

              <Col>
                <StyledButton icon={faCartPlus} action="Comprar" type_button="blue" />
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
                    <span>Windows 7</span>
                  </li>

                  <li>
                    <strong>Armazenamento:</strong>
                    <span>35 GB</span>
                  </li>

                  <li>
                    <strong>Processador:</strong>
                    <span>Intel Core I7 7700</span>
                  </li>

                  <li>
                    <strong>Memória:</strong>
                    <span>16 GB</span>
                  </li>

                  <li>
                    <strong>Placa de Vídeo:</strong>
                    <span>NVIDIA GeForce</span>
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

export default Product;