import { useState, useEffect } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import AdminListTable from '../../../../components/shared/AdminListTable';
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import useSwr from 'swr';
import UsersService from '../../../../services/users';

import UrlService from '../../../../util/UrlService';

import { toast } from 'react-toastify';
import NoData from '../../../../components/shared/NoData';

import User from '../../../../dtos/User';
import { setUserToEdit } from '../../../../store/modules/admin/user/reducer';

const defaultUrl = '/admin/v1/users';

const List: React.FC = () => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState(defaultUrl);
  const [userToRemove, setUserToRemove] = useState(0);

  const { data, error, mutate } = useSwr(url, UsersService.index);

  const search = useSelector(state => state.search);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setUrl(
      defaultUrl +
      UrlService.execute({ page: router.query.page, search })
    );
  }, [search, router.query.page]);

  const handleShow = (id: number): void => {
    setShow(true);
    setUserToRemove(id);
  }

  const handleClose = async (success: boolean): Promise<void> => {
    setShow(false);

    if (!success) return;

    try {
      await UsersService.delete(userToRemove);
      toast.info('Usuário removido com sucesso!');
      mutate();
    } catch (err) {
      toast.error('Erro ao remove o usuário, tente novamente.');
      console.log(err);
    }
  }

  const handleEdit = (user: User): void => {
    dispatch(setUserToEdit(user));
    router.push('/Admin/Users/Edit');
  }

  if (error) {
    toast.error('Erro ao listar usuários!');
    console.log(error);
  }

  return (
    <AdminComponent>
      <TitleAdminPanel 
        title="Usuários" 
        path="Dashboard > Usuários" 
        icon={faUserPlus} 
        newPath="/Admin/Users/New"
      />

      <AdminDeleteModal handleClose={handleClose} show={show} target="usuário" />

      {
        data && data.users && data.users.length > 0 ? (
          <AdminListTable 
            first_title="Nome" 
            second_title="Email" 
            third_title="ID" 
            fourth_title="Status"
            meta={data.meta}
          >
            {
              data.users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.id}</td>
                  <td>{user.profile === 'admin' ? 'Administrador' : 'Cliente'}</td>
                  <td>
                    <div>
                      <FontAwesomeIcon 
                        icon={faEdit} 
                        onClick={() => handleEdit(user)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <FontAwesomeIcon 
                        icon={faTrash} 
                        onClick={() => handleShow(user.id)} 
                      />
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