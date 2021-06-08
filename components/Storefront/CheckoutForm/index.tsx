import React, { useState, useEffect } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import BlueBackground from '../../shared/BlueBackground';
import StyledButton from '../../shared/StyledButton';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

import styles from './styles.module.css';
import MaskedInput from 'react-text-mask';

import MonthsService from '../../../util/MonthsService';

import JunoService from '../../../util/JunoService';
import Checkout from '../../../dtos/Checkout';

interface CheckoutFormProps {
  total: number;
  handleFormSubmit(checkout: Checkout): Promise<void>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({total, handleFormSubmit}) => {
  const [document, setDocument] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postCode, setPostCode] = useState('');

  const [paymentType, setPaymentType] = useState('billet');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [holderName, setHolderName] = useState('');
  const [installments, setInstallments] = useState('');

  const [creditCard, setCreditCard] = useState(false);

  useEffect(() => {
    setCreditCard(paymentType === 'credit_card');
  }, [paymentType])

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    let checkout: Checkout = {
      document,
      payment_type: paymentType,
      installments: installments || "1",
      items:[]
    };

    if (paymentType === 'credit_card') {
      try {
        const cardHard = await JunoService.execute({
          cardNumber: cardNumber.replace(/\s/gi, ''),
          holderName,
          expirationMonth,
          expirationYear,
          securityCode
        });

        checkout['card_hash'] = cardHard;
        checkout['address'] = {
          street,
          number,
          city,
          state,
          'post_code': postCode
        };
      } catch (error) {
        console.log(error);
      }
    }

    await handleFormSubmit(checkout);
  }

  const documentMask = (value) => {
    if (value.replace(/\D/gi, '').length <= 11) {
      return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    }

    return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  }

  return (
    <Form onSubmit={handleSubmit}>
      <BlueBackground>
        <strong>CPF/CNPJ:</strong>
        <hr className={styles.line} />

        <MaskedInput 
          type="text" 
          className={`${styles.gray_input} w-100 mb-4`}
          placeholder="CPF/CNPJ"
          value={document}
          onChange={
            (evt: React.ChangeEvent<HTMLInputElement>) => 
              setDocument(evt.target.value)
          }
          mask={documentMask}
          required
        />

        <strong>FORMAS DE PAGAMENTO</strong>

        <hr className={styles.line} />

        <div className={styles.payment}>
          <div>
            <input 
              type="radio" 
              className="mr-2" 
              name="payment-type" 
              checked={paymentType === 'billet'}
              onChange={
                (_: React.ChangeEvent<HTMLInputElement>) =>
                  setPaymentType('billet')
              }
            />
            <strong>Boleto</strong>
          </div>
          <Image 
            src="/assets/card-flags/boleto.png"
            alt="Boleto"
            className="rounded"
            width={30} height={20}
          />
        </div>

        <hr className={styles.line} />

        <div className={styles.payment}>
          <div>
            <input 
              type="radio" 
              className="mr-2" 
              name="payment-type" 
              checked={paymentType === 'credit_card'}
              onChange={
                (_: React.ChangeEvent<HTMLInputElement>) =>
                  setPaymentType('credit_card')
              }
            />
            <strong>Cartão de Crédito</strong>

            <small className="d-block">
              Até 12x sem juros no cartão
            </small>
          </div>

          <Image 
            src="/assets/card-flags/mastercard.png" 
            alt="Mastercard" 
            className="rounded" 
            width={30} height={20}
          />

          <Image 
            src="/assets/card-flags/visa.png" 
            alt="Visa" 
            className="rounded" 
            width={30} height={20}
          />
        </div>

        {
          paymentType === 'credit_card' &&
          <>
            <div className="mt-4">
              <strong>Número do cartão</strong>

              <MaskedInput 
                type="text" 
                placeholder="XXXX XXXX XXXX XXXX" 
                className={styles.gray_input} 
                value={cardNumber}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) => 
                    setCardNumber(evt.target.value)
                }
                required={creditCard}
                disabled={!creditCard}
                mask={[
                  /\d/, /\d/, /\d/, /\d/, ' ',
                  /\d/, /\d/, /\d/, /\d/, ' ',
                  /\d/, /\d/, /\d/, /\d/, ' ',
                  /\d/, /\d/, /\d/, /\d/
                ]}
              />
            </div>

            <div className="mt-3">
              <Row>
                <Col xs={8}>
                  <strong>Data de Validade</strong>

                  <Row>
                    <Col>
                      <select 
                        className={styles.gray_select}
                        value={expirationMonth}
                        onChange={
                          (evt: React.ChangeEvent<HTMLSelectElement>) => 
                            setExpirationMonth(evt.target.value)
                        }
                        required={creditCard}
                        disabled={!creditCard}
                      >
                        <option value="">Mês</option>
                        {
                          MonthsService.execute().map(
                            (month, index) => 
                              <option 
                                key={index}
                                value={index + 1}
                              >
                                {month}
                              </option>
                          )
                        }
                      </select>
                    </Col>

                    <Col>
                      <select 
                        className={styles.gray_select}
                        value={expirationYear}
                        onChange={
                          (evt: React.ChangeEvent<HTMLSelectElement>) => 
                            setExpirationYear(evt.target.value)
                        }
                        required={creditCard}
                        disabled={!creditCard}
                      >
                        <option value="">Ano</option>
                        {
                          new Array(6).fill(0).map(
                            (_, index) =>
                              <option
                                key={index}
                                value={new Date().getFullYear() + index}
                              >
                                {new Date().getFullYear() + index}
                              </option>
                          )
                        }
                      </select>
                    </Col>
                  </Row>
                </Col>

                <Col xs={4}>
                  <strong>Código</strong>
                  <MaskedInput 
                    type="text" 
                    placeholder="XXX" 
                    className={`${styles.gray_input} w-100`} 
                    value={securityCode}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) => 
                        setSecurityCode(evt.target.value)
                    }
                    required={creditCard}
                    disabled={!creditCard}
                    mask={[/\d/, /\d/, /\d/]}
                  />
                </Col>
              </Row>

              <div className="mt-4">
                <strong>Nome do Cartão</strong>
                <input 
                  type="text" 
                  placeholder="NOME DO CARTÃO" 
                  className={`${styles.gray_input} w-100`}
                  value={holderName}
                  onChange={
                    (evt: React.ChangeEvent<HTMLInputElement>) => 
                      setHolderName(evt.target.value)
                  }
                  required={creditCard}
                  disabled={!creditCard} 
                />
              </div>

              <div className="mt-4">
                <strong>Parcelas</strong>
                <select 
                  className={styles.gray_select} 
                  value={installments}
                  onChange={
                    (evt: React.ChangeEvent<HTMLSelectElement>) => 
                      setInstallments(evt.target.value)
                  }
                  required={creditCard}
                  disabled={!creditCard}
                >
                  <option value="">Selecione</option>
                  {
                    new Array(12).fill(0).map(
                      (_, index) =>
                        <option 
                          key={index}
                          value={index + 1}
                        >
                          {
                            `
                              ${index + 1}x de
                              ${(total / (index + 1)).toFixed(2)}
                              (${((total / (index + 1)) * (index + 1)).toFixed(2)})
                            `
                          }
                        </option>
                    )
                  }
                </select>
              </div>
            </div>

            <div className="mt-4">
              <strong>Endereço de cobrança</strong>

              <hr className={styles.line} />

              <div className="mt-2">
                <strong>Logradouro</strong>
                <input 
                  type="text" 
                  placeholder="Logradouro" 
                  className={`${styles.gray_input} w-100`} 
                  value={street}
                  onChange={
                    (evt: React.ChangeEvent<HTMLInputElement>) => 
                      setStreet(evt.target.value)
                  }
                  required={creditCard}
                  disabled={!creditCard}
                />
              </div>

              <Row className="mt-4">
                <Col>
                  <strong>Número</strong>
                  <input 
                    type="text" 
                    placeholder="Número" 
                    className={`${styles.gray_input} w-100`}
                    value={number}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) => 
                        setNumber(evt.target.value)
                    }
                    required={creditCard}
                    disabled={!creditCard} 
                  />
                </Col>

                <Col>
                  <strong>Cidade</strong>
                  <input 
                    type="text" 
                    placeholder="Cidade" 
                    className={`${styles.gray_input} w-100`} 
                    value={city}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) => 
                        setCity(evt.target.value)
                    }
                    required={creditCard}
                    disabled={!creditCard}
                  />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <strong>Estado</strong>
                  <MaskedInput
                    type="text" 
                    placeholder="Estado" 
                    className={`${styles.gray_input} w-100`} 
                    mask={[/[a-zA-Z]/, /[a-zA-Z]/]}
                    value={state}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) => 
                        setState(evt.target.value)
                    }
                    required={creditCard}
                    disabled={!creditCard}
                  />
                </Col>

                <Col>
                  <strong>CEP</strong>
                  <MaskedInput 
                    type="text" 
                    placeholder="00000-000" 
                    className={`${styles.gray_input} w-100`} 
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                    value={postCode}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) => 
                        setPostCode(evt.target.value)
                    }
                    required={creditCard}
                    disabled={!creditCard}
                  />
                </Col>
              </Row>

            </div>
          </>
        }
      </BlueBackground>

      <div className="mt-3" />

      <BlueBackground>
        <div>
          <strong>VALOR TOTAL</strong>
          <strong className="float-right">
            {`R$ ${total.toFixed(2)}`}
          </strong>
        </div>

        <hr className={styles.line} />

        <StyledButton
          type="submit"
          action="Finalizar Pedido"
          icon={faCartPlus}
          type_button="red"
          className="btn btn-danger w-100"
        />
      </BlueBackground>
    </Form>
  );
}

export default CheckoutForm;