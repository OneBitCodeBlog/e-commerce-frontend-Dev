import { useState, useEffect } from 'react';
import MainComponent from '../../components/shared/MainComponent';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

import ProductInfo from '../../components/shared/ProductInfo';

import useSwr from 'swr';
import { useRouter } from 'next/router';

import SearchService from '../../services/search';
import ProductSearchService from '../../util/ProductSearchService';
import CategoriesService from '../../services/categories';

import { toast } from 'react-toastify';

const defaultUrl = '/storefront/v1/products';

const Search: React.FC = () => {
  const router = useRouter();
  const { 
    search: searchRouter, 
    page, 
    category, 
    price, 
    order: orderRouter, 
    direction 
  } = router.query;

  const [search, setSearch] = useState(searchRouter?.toString());
  const [order, setOrder] = useState(() => {
    if (!!orderRouter) {
      return `${orderRouter.toString()}-${direction.toString()}`;
    }

    return 'price-asc';
  });

  const [url, setUrl] = useState(() => (
      defaultUrl +
      ProductSearchService.execute({
        search,
        order: orderRouter,
        direction: direction
      })
    )
  );

  const { data, error } = useSwr(url, SearchService.execute);

  const { data: categoriesData, error: categoriesError } = 
    useSwr('/storefront/v1/categories?length=999', CategoriesService.index);


  useEffect(() => {
    setUrl(
      defaultUrl +
      ProductSearchService.execute({
        search: searchRouter,
        page,
        category,
        price,
        order: orderRouter,
        direction
      })
    )
  }, [setSearch, page, category, price, orderRouter, direction]);

  useEffect(() => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: 1,
        order: order.split('-')[0],
        direction: order.split('-')[1]
      }
    });
  }, [order]);

  const handleSearch = ():void => {
    router.push(`
      /Search${ProductSearchService.execute({ search })}
    `);
  }

  if (error) {
    toast.error('Erro ao pesquisa produtos.');
    console.log(error);
  }

  if (categoriesError) {
    toast.error('Erro ao obter as categorias');
    console.log(categoriesError);
  }

  return (
    <MainComponent>
      <div>
        <div className="text-center mt-4">
          <h3 className={styles.title}>
            Resultados da Pesquisa
          </h3>
        </div>

        <Row className="text-center col-md-6 offset-md-3">
          <Col xs={10}>
            <InputGroup>
              <FormControl placeholder="Pesquise!!"/>
            </InputGroup>
          </Col>

          <Col xs={2}>
            <FontAwesomeIcon
              icon={faSearch}
              size="2x"
              className={styles.search_icon}
              onClick={handleSearch}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={6} xs={12} className={styles.results}>
            <span>
              16 resultado(s)
            </span>
          </Col>

          <Col sm={6} xs={12}>
            <div className={styles.ordenation}>
              <strong className="mr-3">Ordernar por:</strong>
              <select className={styles.secondary}>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
                <option value="release_date-asc">Lançamentos</option>
                <option value="release_date-desc">Mais antigos</option>
              </select>
            </div>
          </Col>
        </Row>

        <Row>
          <select className={styles.primary}>
            <option>Categoria</option>
            <option>1</option>
            <option>2</option>
          </select>

          <select className={styles.primary}>
            <option>Preço</option>
            <option>1</option>
            <option>2</option>
          </select>
        </Row>

        <div className="mt-4">
          <h5>
            Resultados para Resident Evil 2
          </h5>
        </div>
      </div>


    </MainComponent>
  );
}

export default Search;