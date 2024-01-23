import styles from './Footer.module.scss';
import Logo from '../../assets/whitelogo.svg'
import Telegram from '../../assets/telegram.svg';
import Whatsapp from '../../assets/whatsapp.svg';
import navIcon from '../../assets/navImg.svg';
import SmallArrow from '../../assets/smallArrow.svg';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () => {
  const router = useLocation();

  const [route, setRoute] = useState<string>(router.pathname)

  useEffect(() => {
    setRoute(router.pathname);
  }, [router.pathname])

  return (
    <footer>
      <div className={styles.container}>
      <section>
        <div className={styles.grid}>
          <div className={styles['left-container']}>
            <img src={Logo} alt="" />
            <div>
              <a href="#" className={route === '/' ? styles.active : ''}><p>Главная</p></a>
              <a href="#" className={route === '/projects' ? styles.active : ''}><p>Проекты</p></a>
              <a href="#"><p>Экспертиза</p></a>
              <a href="#"><p>Компания</p></a>
            </div>
          </div>
          <div className={styles['right-container']}>
            <div>
              <p style={{fontSize: '15px', paddingBottom: '6px'}}>Пишите</p>
              <a href='mailto:audit@ccl-logistics.ru'><p>audit@ccl-logistics.ru</p></a>
              <div style={{paddingTop: '6px'}}>
                <div>
                  <img src={Telegram} alt="telegram" />
                  <a href="#"><p><span>Телеграм</span></p></a>
                </div>
                <div>
                  <img src={Whatsapp} alt="whatsapp" />
                  <a href=""><p><span>Ватсапп</span></p></a>
                </div>
              </div>
              <div className={styles['grey-line']}></div>
            </div>
            <div>
              <p style={{fontSize: '15px', paddingBottom: '6px'}}>Звоните</p>
              <a href='tel:+74957639195'><p>+7 (495) 763-91-95</p></a>
              <div className={styles['grey-line']}></div>
            </div>

            <div>
              <p style={{fontSize: '15px', paddingBottom: '6px'}}>Приходите</p>
              <p>Ленинградский пр-кт, дом 39с14, офис 203</p>
              <div style={{paddingTop: '6px'}}>
                <div>
                  <img src={navIcon} alt="nav" />
                  <a href="#"><p><span>Проложить маршрут</span></p></a>
                </div>
              </div>
              <div className={styles['grey-line']}></div>
            </div>

          </div>
        </div>

        <div className={styles['grey-line-desc']}></div>

        <div className={styles.links}>
          <p>ООО «Координационный совет по логистике»</p>
          <div className={styles['links-container']}>
            <div>
              <a href="#"><p>Обучение</p></a>
              <img src={SmallArrow} alt="arrow" />
            </div>
            <div>
              <a href="#"><p>ММЛФ</p></a>
              <img src={SmallArrow} alt="arrow" />
            </div>
            <div>
              <a href="#"><p>Logbook</p></a>
              <img src={SmallArrow} alt="arrow" />
            </div>
          </div>
        </div>
      </section>
      </div>
    </footer>
  )
}

export { Footer };