import React from 'react';
import styles from './styles.module.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Logo';
import Image from 'next/image';

const StorefrontFooter: React.FC = () => {
    return (
        <footer className={styles.background}>
            <Col md={{ span: 8, offset: 2 }}>
                <Row>
                    <Col lg={7} md={12}>
                        <Row>
                            <Col lg={5} md={12} className="mb-4 mb-lg-0">
                                Acompanhe-nos
                            </Col>

                            <Col lg={7} md={12} className="mb-4 mb-lg-0">
                                <Row>
                                    <Col lg={1} xs={2}>
                                        <FontAwesomeIcon icon={faFacebookF}  />
                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <FontAwesomeIcon icon={faYoutube}  />
                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <FontAwesomeIcon icon={faTwitter}  />
                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <FontAwesomeIcon icon={faLinkedin}  />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={{span: 4, offset: 0}} xs={{span: 8, offset: 2}}>
                        <Row>
                            <Col>
                                Contato
                            </Col>

                            <Col>
                                Sobre
                            </Col>

                            <Col>
                                Blog
                            </Col>

                            <Col>
                                FAQ
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <hr className={styles.line} />

                <Row>
                    <Col lg={{span: 2, offset: 0}} xs={{span: 8, offset: 2}}>
                        <Logo />
                    </Col>

                    <Col lg={{span: 6, offset: 1}} xs={12}>
                        <p style={{'color': 'var(--color-gray-light)'}}>onebitcode.com • contato@onebitcode.com</p>
                    </Col>

                    <Col lg={{span: 2, offset: 1}} xs={{span: 6, offset: 3}}>
                        <Image src="/assets/logo-bootcamp.png" alt="Logo Bootcamp" width={240} height={70} />
                    </Col>
                </Row>
            </Col>
        </footer>
    )
}

export default StorefrontFooter;