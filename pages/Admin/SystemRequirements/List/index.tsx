import { useState, useEffect } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import AdminListTable from '../../../../components/shared/AdminListTable';
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import useSwr from 'swr';
import UrlService from '../../../../util/UrlService';

import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import SystemRequirementsService from '../../../../services/systemRequirements';
import { toast } from 'react-toastify';

import NoData from '../../../../components/shared/NoData';
import SystemRequirement from '../../../../dtos/SystemRequirement';
import { setSystemRequirementToEdit } from '../../../../store/modules/admin/systemRequirement/reducer';

const defaultUrl = '/admin/v1/system_requirements';

const List: React.FC = () => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState(defaultUrl);
  const [systemRequirementToRemove, setSystemRequirementToRemove] = useState(0);

  const search = useSelector(state => state.search);
  const router = useRouter();
  const dispatch = useDispatch();

  const { data, error, mutate } = useSwr(url, SystemRequirementsService.index);

  useEffect(() => {
    setUrl(
      defaultUrl + 
      UrlService.execute({ page: router.query.page, search })
    );
  }, [search, router.query.page])

  const handleShow = (id: number): void => {
    setShow(true)
    setSystemRequirementToRemove(id);
  }

  const handleClose = async (success: boolean): Promise<void> => {
    setShow(false);

    if (!success) return;

    try {
      await SystemRequirementsService.delete(systemRequirementToRemove);
      toast.info('Requisito de sistema removido com sucesso!');
      mutate();
    } catch (err) {
      toast.error('Ocorreu um erro ao remover o requisito de sistema, tente novamente.');
      console.log(err);
    }
  }

  const handleEdit = (systemRequirement: SystemRequirement): void => {
    dispatch(setSystemRequirementToEdit(systemRequirement));
    router.push('/Admin/SystemRequirements/Edit');
  }

  if (error) {
    toast.error('Erro ao listar os requisitos de sistema');
    console.log(error);
  }

  return (
    <AdminComponent>
      <TitleAdminPanel 
        title="Requisitos" 
        path="Dashboard > Requisitos" 
        icon={faMicrochip} 
        newPath="/Admin/SystemRequirements/New" 
      />

      <AdminDeleteModal handleClose={handleClose} show={show} target="requisito de sistema" />

      {
        data && data.system_requirements && data.system_requirements.length > 0 ? (
          <AdminListTable 
            first_title="Nome" 
            second_title="Sistema Operacional" 
            third_title="Armazenamento" 
            fourth_title="Processador" 
            fifth_title="Memória" 
            sixth_title="Placa de vídeo"
            meta={data.meta}
          >
            {
              data.system_requirements.map(system_requirement => (
                <tr key={system_requirement.id}>
                  <td>{system_requirement.name}</td>
                  <td>{system_requirement.operational_system}</td>
                  <td>{system_requirement.storage}</td>
                  <td>{system_requirement.processor}</td>
                  <td>{system_requirement.memory}</td>
                  <td>{system_requirement.video_board}</td>
                  <td>
                    <div>
                      <FontAwesomeIcon 
                        icon={faEdit} 
                        onClick={() => handleEdit(system_requirement)}
                        />
                    </div>
                  </td>
                  <td>
                    <div>
                      <FontAwesomeIcon 
                        icon={faTrash} 
                        onClick={() => handleShow(system_requirement.id)} />
                    </div>
                  </td>
                </tr>
              ))
            }
          </AdminListTable>
        ) : (
          <NoData />
        )
      }
    </AdminComponent>
  )
}

export default withAuthAdmin(List);