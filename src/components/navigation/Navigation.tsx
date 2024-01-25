import styles from './navigation.module.scss';
import Logo from '../../assets/Union.png';
import Icon from '../../assets/icon.png';
import { CustomLink } from '../CustomLink';
import { MobileNav } from './MobileNav';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useLocation();
  const [route, setRoute] = useState<string>(router.pathname)

  const handleOpen = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [setIsOpen]);

  useEffect(() => {
    setIsOpen(false)
  }, [router.pathname]);


  useEffect(() => {
    setRoute(router.pathname);
  }, [router.pathname])

  return (
    <nav>
      <section>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to='/'><img src={Logo} alt="logo" /></Link>
            <p>Логистический консалтинг</p>
          </div>

          <div className={styles.links}>
            <CustomLink path='/projects' route={route}><p>Проекты</p></CustomLink>
            <CustomLink path='/'><p>Экспертиза</p></CustomLink>
            <CustomLink path='/'><p>Компания</p></CustomLink>
          </div>

          <div className={styles.icon}>
            <img src={Icon} alt="Icon" onClick={handleOpen}/>
          </div>
        </div>

        <MobileNav isOpen={isOpen} handleOpen={handleOpen}/>
      </section>
    </nav>
  )
}

export { Navigation }