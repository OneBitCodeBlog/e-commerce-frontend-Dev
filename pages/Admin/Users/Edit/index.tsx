import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import UserForm from '../../../../components/Admin/UserForm';
import User from '../../../../dtos/User';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { clearUserToEdit } from '../../../../store/modules/admin/user/reducer';

import UsersService from '../../../../services/users';

const Edit: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const handleSubmit = async (user: User): Promise<void> => {
    try {
      await UsersService.update(user);
      toast.info('Usuário atualizado com sucesso!');
      dispatch(clearUserToEdit());
      router.back();
    } catch (err) {
      toast.error('Erro ao atualizar o usuário, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Editar Usuário" path="Dashboard > Usuários > Detalhes do usuário > Editar usuário" />

      <UserForm handleSubmit={handleSubmit} action="Atualizar"/>
    </AdminComponent>
  )
}

export default withAuthAdmin(Edit);