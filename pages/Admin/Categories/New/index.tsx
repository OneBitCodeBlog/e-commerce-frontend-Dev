import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import CategoryForm from '../../../../components/Admin/CategoryForm';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import CategoriesService from '../../../../services/categories';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import Category from '../../../../dtos/Category';

const New: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async ({ name }: Category): Promise<void> => {
    try {
      await CategoriesService.create(name);
      toast.info('Categoria cadastrada com sucesso!');

      router.back();
    } catch (err) {
      toast.error('Ocorreu algum erro, tente novamente!');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Categoria" path="Dashboard > Categorias > Adicionar Categoria" />

      <CategoryForm handleSubmit={handleSubmit} action="Adicionar" />
    </AdminComponent>
  )
}

export default withAuthAdmin(New);