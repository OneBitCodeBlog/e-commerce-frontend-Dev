import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import SystemRequirementForm from '../../../../components/Admin/SystemRequirementForm';
import SystemRequirement from '../../../../dtos/SystemRequirement';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { clearSystemRequirementToEdit } from "../../../../store/modules/admin/systemRequirement/reducer";

import SystemRequirementsService from '../../../../services/systemRequirements';

const New: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (system_requirement: SystemRequirement): Promise<void> => {
    try {
      await SystemRequirementsService.update(system_requirement);

      toast.info('Requisito de sistema atualizado com sucesso!');
      dispatch(clearSystemRequirementToEdit());
      router.back();
    } catch (err) {
      toast.error('Erro ao atualizar o requisito de sistema, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Atualizar Requisito" path="Dashboard > Requisitos > Adicionar requisito" />

      <SystemRequirementForm handleSubmit={handleSubmit} action="Atualizar"/>
    </AdminComponent>
  )
}

export default withAuthAdmin(New);