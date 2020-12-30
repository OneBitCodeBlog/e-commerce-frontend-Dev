import styles from '../../../styles/AdminPanel.module.css';

interface NoDataProps {
  message?: string
}

const NoData: React.FC<NoDataProps> = 
  ({ message = 'Não há dados cadastrados ou encontrados =(' }) => {
  return (
    <div className={styles.admin_panel}>
      { message }
    </div>
  )
}

export default NoData;