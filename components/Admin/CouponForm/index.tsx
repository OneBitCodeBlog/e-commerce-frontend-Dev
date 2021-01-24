import { useState, useEffect } from 'react';
import { Form, Col } from 'react-bootstrap';
import { faTicketAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles.module.css';
import StyledButton from '../../shared/StyledButton';

import { useSelector, useDispatch } from 'react-redux';
import { clearCouponToEdit } from '../../../store/modules/admin/coupon/reducer';

import { useRouter } from 'next/router';
import Coupon from '../../../dtos/Coupon';

interface CouponFormProps {
  handleSubmit: (coupon: Coupon) => Promise<void>;
  action?: string;
}

const CouponForm: React.FC<CouponFormProps> = ({ handleSubmit, action = 'Adicionar'}) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('active');
  const [discountValue, setDiscountValue] = useState(1);
  const [dueDate, setDueDate] = useState('');

  const coupon = useSelector(state => state.coupon);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (coupon && router.pathname.includes('Edit')) {
      setName(coupon.name);
      setCode(coupon.code);
      setStatus(coupon.status);
      setDiscountValue(coupon.discount_value);
      setDueDate(coupon.due_date.split('T')[0]);
    }
  }, [coupon])

  const handleFormSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();

    await handleSubmit({
      id: coupon?.id,
      name,
      code,
      status,
      discount_value: discountValue,
      due_date: dueDate
    });
  }

  return (
    <div className={styles.admin_panel}>
        <Form className={styles.new_form} onSubmit={handleFormSubmit}>
          <Form.Row>
            <Form.Group as={Col} sm={6} xs={12} className="p-2">
              <Form.Label>Nome</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite o Nome" 
                className={styles.secundary_input} 
                value={name}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setName(evt.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group as={Col} sm={6} xs={12} className="p-2">
              <Form.Label>Código</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite o Código" 
                className={styles.secundary_input} 
                value={code}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setCode(evt.target.value)
                }
                required/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm={6} xs={12} className="p-2">
              <Form.Label>Status</Form.Label>
              <Form.Control 
                as="select" 
                placeholder="Digite o Status" 
                className={styles.secundary_input} 
                value={status}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setStatus(evt.target.value)
                }
                required
              >
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} sm={6} xs={12} className="p-2">
              <Form.Label>Valor de Desconto</Form.Label>
              <Form.Control 
                type="number" 
                min="1"
                max="99.99"
                placeholder="Ex. 20,00" 
                className={styles.secundary_input} 
                value={discountValue}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setDiscountValue(Number(evt.target.value))
                }
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm={12} xs={12} className="p-2">
              <Form.Label>Validade</Form.Label>
              <Form.Control 
                type="date" 
                placeholder="Digite a data" 
                className={styles.secundary_input} 
                value={dueDate}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setDueDate(evt.target.value)
                }
                required
              />
            </Form.Group>
          </Form.Row>

          <div className={styles.details_button}>
            <StyledButton 
              icon={faTicketAlt} 
              action={action} 
              type_button="blue" 
              type="submit"
            />
            <StyledButton 
              icon={faTimes} 
              action={"Cancelar"} 
              type_button="red" 
              onClick={() => {
                dispatch(clearCouponToEdit());
                router.back();
              }}
            />
          </div>
        </Form>
      </div>
  )
}

export default CouponForm;