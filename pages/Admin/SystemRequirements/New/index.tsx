import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import SystemRequirementForm from '../../../../components/Admin/SystemRequirementForm';

import withAuthAdmin from '../../../../components/withAuthAdmin';
import SystemRequirement from '../../../../dtos/SystemRequirement';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import SystemRequirementsService from '../../../../services/systemRequirements';

const New: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (system_requirement: SystemRequirement): Promise<void> => {
    try {
      await SystemRequirementsService.create(system_requirement);

      toast.info('Requisito de sistema salvo com sucesso!');
      router.back();
    } catch (err) {
      toast.error('Erro ao salvar o requisito de sistema, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Requisito" path="Dashboard > Requisitos > Adicionar requisito" />

      <SystemRequirementForm handleSubmit={handleSubmit}/>
    </AdminComponent>
  )
}

export default withAuthAdmin(New);