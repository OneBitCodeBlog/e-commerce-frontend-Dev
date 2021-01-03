import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import withAuthAdmin from '../../../../components/withAuthAdmin';

import ProductForm from '../../../../components/Admin/ProductForm';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import ProductsService from '../../../../services/products';

const New: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (product: FormData): Promise<void>  => {
    try {
      if (!product.get('product[image]')) {
        toast.info('A imagem do produto é obrigatória!');
        return;
      }

      await ProductsService.create(product);

      toast.info('Produto salvo com sucesso!');
      router.back();
    } catch (err) {
      toast.error('Ocorreu um erro ao salvar o produto, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Produto" path="Dashboard > Produtos > Adicionar produtos" />

      <ProductForm handleSubmit={handleSubmit}/>
    </AdminComponent>
  )
}

export default withAuthAdmin(New);