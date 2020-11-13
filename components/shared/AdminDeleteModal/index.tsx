import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/AdminPanel.module.css';

interface AdminDeleteModalProps {
    show: boolean,
    handleClose: () => void
}

const AdminDeleteModal: React.FC<AdminDeleteModalProps> = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} className={styles.modal} animation={true}>
            <Modal.Body className={styles.modal_body}>
                Tem certeza que deseja excluir este usuário?
            
                <Row>
                    <Col lg={6} xs>
                        <Button className={styles.red_button} onClick={handleClose}>
                            <FontAwesomeIcon icon={faTrash} className="mr-2" /> Excluir
                        </Button>
                    </Col>

                    <Col lg={6} xs>
                        <Button className={styles.blue_button} onClick={handleClose}>
                            <FontAwesomeIcon icon={faTimes} className="mr-2" /> Cancelar
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default AdminDeleteModal;