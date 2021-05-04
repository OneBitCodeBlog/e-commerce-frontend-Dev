import styles from './styles.module.css';

const Badge: React.FC = ({children}) => {
  return (
    <div className={styles.container}>
      <span>{children}</span>
    </div>
  )
}

export default Badge;