import styles from './MobileNav.module.scss';
import WhiteLogo from '../../../assets/whitelogo.svg'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WhiteTelegram from '../../../assets/WhiteTelegram.svg';
import WhiteWhatsApp from '../../../assets/WhiteWhatsApp.svg';
import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Nav = {
  isOpen: boolean,
  handleOpen: () => void,
}

const MobileNav: FC<Nav> = ({ isOpen, handleOpen }) => {
  const router = useLocation();
  const [route, setRoute] = useState<string>(router.pathname)

  useEffect(() => {
    setRoute(router.pathname);
  }, [router.pathname])

  return (
    <div className={`${styles.container} ${isOpen ? styles.active : ''}`}>
      <div className={styles.grid}>
        <div className={styles.flex}>
          <div className={styles.logo}>
            <img src={WhiteLogo} alt="" />
            <p>Логистический консалтинг</p>
          </div>
          <KeyboardArrowUpIcon
            style={
              {
                color: 'white',
                height: '36px',
                width: '36px',
                position: 'relative',
                right: '-5px'
              }
            }
            onClick={handleOpen}
          />
        </div>

        <div className={styles.main}>
          <div className={styles.flex}>
            <div>
              <Link to="/" className={route === '/' ? styles.active : ''}><h1>Главная</h1></Link>
              <Link to="/projects" className={route === '/projects' ? styles.active : ''}><h1>Проекты</h1></Link>
              <Link to="#"><h1>Экспертиза</h1></Link>
              <Link to="#"><h1>Компания</h1></Link>
            </div>
          </div>
        </div>

        <div className={styles.contacts}>
          <div className={styles.flex}>
            <a href='tel:+74957639195'><p>+7 (495) 763-91-95</p></a>
            <div>
              <img src={WhiteTelegram} alt="Telegram" />
              <img src={WhiteWhatsApp} alt="WhatsApp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MobileNav }