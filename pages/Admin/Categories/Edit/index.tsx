import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import Category from '../../../../dtos/Category';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import { useDispatch } from 'react-redux';
import { clearCategoryToEdit } from '../../../../store/modules/admin/category/reducer';

import CategoriesService from '../../../../services/categories';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import CategoryForm from '../../../../components/Admin/CategoryForm';

const Edit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (category: Category): Promise<void> => {
    try {
      await CategoriesService.update(category);

      toast.info('Categoria atualizada com sucesso!');

      dispatch(clearCategoryToEdit());
      router.back();
    } catch (err) {
      toast.error('Ocorreu um erro ao atualizar a categoria, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Editar Categoria" path="Dashboard > Categorias > Detalhes da categoria > Editar categoria" />

      <CategoryForm handleSubmit={handleSubmit} action="Atualizar"/>
    </AdminComponent>
  )
}

export default withAuthAdmin(Edit);