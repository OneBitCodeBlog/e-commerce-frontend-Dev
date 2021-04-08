import { Form, Row, Col } from 'react-bootstrap';

import BlueBackground from '../../components/shared/BlueBackground';
import MainComponent from '../../components/shared/MainComponent';

import Menu from '../../components/Storefront/Menu';

import StyledButton from '../../components/shared/StyledButton';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';

const Profile: React.FC = () => {
  return (
    <MainComponent>
      <Menu tab="personal_data"/>

      <Form className={styles.form}>
        <BlueBackground>
          <div>
            <strong className="d-block">Leonardo Scorza</strong>
            <span className={styles.blue_text}>
              contato@onebitcode.com
            </span>
          </div>

          <Row className="mt-4">
            <Col xs={12}>
              <div>
                <span className="d-block">
                  Informações Pública
                </span>
                <small className={styles.blue_text}>
                  Essas informações serão exibidas publicamente
                </small>

                <Form.Group className="p-4">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control placeholder="Nome de exibição" className={styles.input_background} />
                </Form.Group>
              </div>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <span className="d-block">
                Informações Pessoais
              </span>
              <small className={styles.blue_text}>
                Essas informações NÃO serão exibidas publicamente
              </small>

              <div className="pl-4 pr-4 pt-3">
                <Form.Group>
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control placeholder="E-mail" className={styles.input_background} type="email"/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Senha</Form.Label>
                  <Form.Control placeholder="Senha" className={styles.input_background} type="password"/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Repetir Senha</Form.Label>
                  <Form.Control placeholder="Repetir Senha" className={styles.input_background} type="password"/>
                </Form.Group>
              </div>
            </Col>
          </Row>
        </BlueBackground>

        <div className="float-right mt-4 mb-4">
          <StyledButton 
            icon={faUser} 
            action="Salvar alterações" 
            type_button="blue" 
            type="submit" 
          />
        </div>
      </Form>
    </MainComponent>
  );
}

export default Profile;