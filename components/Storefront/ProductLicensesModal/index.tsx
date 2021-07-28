import {
  Modal,
  Button,
  Col,
  Row,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

interface ProductLicensesModalProps {
  show: boolean;
  onHide: () => void;
}

const ProductLicensesModal: React.FC<ProductLicensesModalProps> = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      dialogClassName={styles.modal}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Cuphead - "Don't deal with de the Devil"
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <strong>Chaves de Ativação</strong>
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text className={styles.key_input}>
                  <FontAwesomeIcon icon={faKey} />
                </InputGroup.Text>
              </InputGroup.Prepend>

              <FormControl 
                placeholder="Chave"
                className={styles.key_input}
              />
            </InputGroup>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductLicensesModal;