import styles from './SideMenu.module.scss';
import { DiscussButton } from './DiscussButton';
import { useCallback, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Arrow from '../../../assets/icon-right.svg';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, [setIsOpen])

  return (
    <>
      <DiscussButton handleClick={handleClick} />
      <div className={`${styles.container} ${isOpen ? styles.active : ''}`}>
        <aside>
          <form>
            <div className={styles['flex-container']}>
              <h3>Обсудить задачу</h3>
              <CloseIcon style={{ cursor: 'pointer', fontSize: '36px', color: '#99958F' }} onClick={handleClick} />
            </div>
            <div className={styles.flex}>
              <div className={styles.grid}>
                <input type="text" placeholder='Ваше имя' />
                <input type="text" placeholder='Компания' />
                <input type="tel" placeholder='Телефон' />
                <input type="email" placeholder='Эл. почта' />
              </div>
            </div>

            <div className={styles.flex}>
              <div style={{ width: "100%", padding: '32px 0 15px 0' }}>
                <p style={{ fontSize: '15px', color: '#99958F' }}>Удобный способ связи</p>
              </div>
              <div className={styles.checkboxes}>
                <div className={styles.checkbox}>
                  <input type="checkbox" id="Call" value="Call" />
                  <label htmlFor="Call"><p>Звонок</p></label>
                </div>
                <div className={styles.checkbox}>
                  <input type="checkbox" id="Telegram" value="Telegram" />
                  <label htmlFor="Telegram"><p>Telegram</p></label>
                </div>
                <div className={styles.checkbox}>
                  <input type="checkbox" id="Whatsapp" value="Whatsapp" />
                  <label htmlFor="Whatsapp"><p>Ватсапп</p></label>
                </div>
                <div className={styles.checkbox}>
                  <input type="checkbox" id="Email" value="Email" />
                  <label htmlFor="Email"><p>Эл. почта</p></label>
                </div>
              </div>
            </div>

            <div className={styles.flex}>
              <div className={styles['textarea-container']}>
                <textarea name="" id="" placeholder='Опишите проект или задачу в нескольких предложениях...'></textarea>
              </div>
            </div>

            <button type='submit'>
              <div>
                <p>Отправить</p>
                <img src={Arrow} alt="" />
              </div>
            </button>

            <div className={styles.flex}>
              <div style={{ width: "100%", paddingBottom: '128px' }}>
                <p style={{ fontSize: '15px', color: '#99958F' }}>Нажимая кнопку «Отправить»,
                  вы соглашаетесь <a href='#'>с обработкой персональных данных</a></p>
              </div>
            </div>
          </form>
        </aside>
      </div>
    </>
  )
}

export { SideMenu }