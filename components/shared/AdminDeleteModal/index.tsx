import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/AdminPanel.module.css';
import StyledButton from '../StyledButton';

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
                        <div onClick={handleClose}>
                            <StyledButton icon={faTrash} action={"Excluir"} type_button="red" />
                        </div>
                    </Col>

                    <Col lg={6} xs>
                        <div onClick={handleClose}>
                            <StyledButton icon={faTimes} action={"Cancelar"} type_button="blue" />
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default AdminDeleteModal;