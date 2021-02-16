import MainComponent from '../../components/shared/MainComponent';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

const Search: React.FC = () => {
  const handleSearch = () => {}

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