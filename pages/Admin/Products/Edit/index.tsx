import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import ProductForm from '../../../../components/Admin/ProductForm';
import ProductsService from '../../../../services/products';

import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { clearProductToEdit } from '../../../../store/modules/admin/product/reducer';


const Edit: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (product: FormData): Promise<void> => {
    try {
      await ProductsService.update(product);

      toast.info('Produto atualizado com sucesso!');
      
      // limpando o produto para edição do redux
      dispatch(clearProductToEdit());
      router.back();
    } catch (err) {
      toast.error('Ocorreu um erro ao atualizar o produto, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Editar Produto" path="Dashboard > Produtos > Detalhes do produto > Editar produto" />

      <ProductForm action="Atualizar" handleSubmit={handleSubmit}/>
    </AdminComponent>
  )
}

export default withAuthAdmin(Edit);