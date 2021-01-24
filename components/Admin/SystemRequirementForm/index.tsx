import { useState, useEffect } from 'react';
import { Form, Col } from 'react-bootstrap';
import { faMicrochip, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles.module.css';
import StyledButton from '../../../components/shared/StyledButton';
import SystemRequirement from '../../../dtos/SystemRequirement';

import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { clearSystemRequirementToEdit } from '../../../store/modules/admin/systemRequirement/reducer';
import { clear } from 'console';

interface SystemRequirementFormProps {
  handleSubmit: (system_requirement: SystemRequirement) => Promise<void>;
  action?: string;
}

const SystemRequirementForm: React.FC<SystemRequirementFormProps> = ({ handleSubmit, action = 'Adicionar' }) => {
  const [name, setName] = useState('');
  const [operationalSystem, setOperationalSystem] = useState('');
  const [storage, setStorage] = useState('');
  const [processor, setProcessor] = useState('');
  const [memory, setMemory] = useState('');
  const [videoBoard, setVideoBoard] = useState('');

  const systemRequirement: SystemRequirement = useSelector(state => state.systemRequirement);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (systemRequirement && router.pathname.includes('Edit')) {
      setName(systemRequirement.name);
      setOperationalSystem(systemRequirement.operational_system);
      setStorage(systemRequirement.storage);
      setProcessor(systemRequirement.processor);
      setMemory(systemRequirement.memory);
      setVideoBoard(systemRequirement.video_board);
    }
  }, [systemRequirement]);

  const handleFormSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();
    
    await handleSubmit({
      id: systemRequirement?.id,
      name,
      operational_system: operationalSystem,
      storage,
      processor,
      memory,
      video_board: videoBoard
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
              <Form.Label>Sistema Operacional</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite o Sistema Operacional" 
                className={styles.secundary_input} 
                value={operationalSystem}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) => 
                    setOperationalSystem(evt.target.value)
                }
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm={6} xs={12} className="p-2">
              <Form.Label>Armazenamento</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite o Armazenamento" 
                className={styles.secundary_input} 
                value={storage}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) => 
                    setStorage(evt.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group as={Col} sm={6} xs={12} className="p-2">
              <Form.Label>Processador</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite o Processador" 
                className={styles.secundary_input} 
                value={processor}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) => 
                    setProcessor(evt.target.value)
                }
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm={6} xs={12} className="p-2">
              <Form.Label>Memória</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite a Memória" 
                className={styles.secundary_input} 
                value={memory}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) => 
                    setMemory(evt.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group as={Col} sm={6} xs={12} className="p-2">
              <Form.Label>Placa de vídeo</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Digite a Placa de vídeo" 
                className={styles.secundary_input} 
                value={videoBoard}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) => 
                    setVideoBoard(evt.target.value)
                }
                required
              />
            </Form.Group>
          </Form.Row>

          <div className={styles.details_button}>
            <StyledButton 
              icon={faMicrochip} 
              action={action} 
              type_button="blue" 
              type="submit"
            />

            <StyledButton 
              icon={faTimes} 
              action={"Cancelar"} 
              type_button="red" 
              onClick={() => {
                  // limpando o requisito de sistema para edição quando a edição é cancelada
                  // para não enviar o id caso seja um cadastro para não dar erro
                  // de chave primária
                dispatch(clearSystemRequirementToEdit());
                router.back();
              }}
            />
          </div>

        </Form>
      </div>
  )
}

export default SystemRequirementForm;