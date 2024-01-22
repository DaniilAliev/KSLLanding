import styles from './navigation.module.scss';
import Logo from '../../assets/Union.png';
import Icon from '../../assets/icon.png';
import { CustomLink } from '../CustomLink';

const Navigation = () => {
  return (
    <nav>
      <section>
        <div className={styles.container}>
          <div className={styles.logo}>
            <CustomLink path='/'><img src={Logo} alt="logo" /></CustomLink>
            <p>Логистический консалтинг</p>
          </div>

          <div className={styles.links}>
            <CustomLink path='/'><p>Проекты</p></CustomLink>
            <CustomLink path='/'><p>Экспертиза</p></CustomLink>
            <CustomLink path='/'><p>Компания</p></CustomLink>
          </div>

          <div className={styles.icon}>
            <img src={Icon} alt="Icon" />
          </div>
        </div>
      </section>
    </nav>
  )
}

export { Navigation }