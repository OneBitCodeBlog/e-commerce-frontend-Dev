import React from 'react';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/AdminTitle.module.css';
import StyledButton from '../StyledButton';

interface TitleAdminPanelProps {
    title: String,
    path: String
}

const TitleAdminPanel: React.FC<TitleAdminPanelProps> = ({ title, path }) => {
    return (
        <Row className="mt-4">
            <Col lg={6} xs={4}>
                <Row>
                    <Col lg={3} xs={6}>
                        <h3>{ title }</h3>
                    </Col>

                    <Col lg={9} xs={6} className="mt-2 d-none d-md-block">
                        <span className={styles.styledPath}>{ path }</span>
                    </Col>
                </Row>
            </Col>

            <Col lg={{span: 4, offset: 2}} xs={8}>
                <Row>
                    <Col lg={9} xs>
                        <Row>
                            <Col lg={9} xs={10}>
                                <InputGroup>
                                    <FormControl placeholder="Pesquisar usuário" className={styles.input} />
                                </InputGroup>
                            </Col>

                            <Col lg={3} xs={2} className="mt-1">
                                <FontAwesomeIcon icon={faSearch} size="lg" color="var(--color-gray-light)" className="float-left" />
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={2} xs={{span: 3}} className={styles.titleButton}>
                        <StyledButton icon={faUserPlus} type_button="blue" />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default TitleAdminPanel;