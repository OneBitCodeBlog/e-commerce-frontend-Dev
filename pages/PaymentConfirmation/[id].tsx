import MainComponent from "../../components/shared/MainComponent";
import StyledButton from "../../components/shared/StyledButton";

import styles from './styles.module.css';
import product_style from '../Product/styles.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGamepad, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import BlueBackground from "../../components/shared/BlueBackground";

import { Col, Row, Badge } from "react-bootstrap";

import withAuth from "../../components/withAuth";

const PaymentConfirmation: React.FC = () => {
  return (
    <MainComponent>
      <div className="mt-4 mb-5">
        <strong>Pagamento Recebido</strong>
        <strong className={styles.secondary_color}>#202101</strong>

        <div className="float-right">
          <StyledButton action={"Voltar para a Loja"} icon={faArrowLeft} type_button="blue" />
        </div>
      </div>

      <div className="mt-4">
        <div className={styles.blue_text}>
          <FontAwesomeIcon icon={faCheckSquare} />
          <strong> Sucesso: </strong>
          <span>Obrigado por seu pedido! Você receberá um e-mail em breve.</span>
        </div>
      </div>

      <BlueBackground>
        <strong>PRODUTO</strong>
        <strong className="float-right">VALOR</strong>

        <hr className={styles.line} />

        <Row className={styles.product}>
          <Col sm={3} xs={12} className="text-center">
            <img src="/assets/product_image.png" alt="Jogo Counter Strike" />
          </Col>

          <Col sm={7} xs={9}>
            <strong className={styles.product_name}>
              Counter Strike
            </strong>

            <div>
              <Badge variant="primary ml-1" className={styles.primary_badge}>Ação</Badge>
              <Badge variant="primary ml-1" className={styles.primary_badge}>Aventura</Badge>
              <Badge variant="primary ml-1" className={styles.primary_badge}>Indie</Badge>
            </div>
          </Col>

          <Col sm={2} xs={3} className="text-center">
            <strong className={styles.price}>R$ 89.90</strong>
          </Col>
        </Row>

        <hr className={styles.line} />

        <Row className={styles.product}>
          <Col sm={3} xs={12} className="text-center">
            <img src="/assets/product_image.png" alt="Jogo Counter Strike" />
          </Col>

          <Col sm={7} xs={9}>
            <strong className={styles.product_name}>
              Counter Strike
            </strong>

            <div>
              <Badge variant="primary ml-1" className={styles.primary_badge}>Ação</Badge>
              <Badge variant="primary ml-1" className={styles.primary_badge}>Aventura</Badge>
              <Badge variant="primary ml-1" className={styles.primary_badge}>Indie</Badge>
            </div>
          </Col>

          <Col sm={2} xs={3} className="text-center">
            <strong className={styles.price}>R$ 89.90</strong>
          </Col>
        </Row>
      </BlueBackground>

      <Row className="mt-4 mb-4">
        <Col>
          <StyledButton 
            action={"Acessar meus Games"} 
            icon={faGamepad} 
            type_button="blue"
            className={`${styles.button_blue_text} float-right`}
          />
        </Col>
      </Row>
    </MainComponent>
  )
}

export default withAuth(PaymentConfirmation);