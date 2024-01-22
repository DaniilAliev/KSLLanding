import styles from './Main.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from './data';
import { Item } from './Item';
import HighArrow from '../../assets/highArrow.svg';
import Gerb from '../../assets/gerb.svg';
import Download from '../../assets/download.svg';
import { Accordeon } from './Accordeon';
import { SideMenu } from './SideMenu';

const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <section>
          <div className={styles.header}>
            <h1>Проекты говорят за нас</h1>
          </div>
        </section>
      </div>

      <div className={styles['swiper-container']}>
        <Swiper
          spaceBetween={30}
          slidesPerView={'auto'}
          className={styles.mySwiper}
        >
          {data.map((item, index) =>
            <SwiperSlide className={styles.slide}>
              <Item item={item} index={index} />
            </SwiperSlide>
          )}
          <SwiperSlide className={styles.more}>
            <div>
              <p>Еще 119 проектов</p>
              <p>Смотреть все </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={`${styles.container} ${styles.desktop}`}>
        <section>
          <div className={styles.line}></div>
        </section>
      </div>

      <div className={styles.container} >
        <section>
          <div className={styles.grid}>
            <div className={styles['left-container']}>
              <h2>Нас выбирают, потому что доказываем эффективность</h2>
              <div>
                <a href="#" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <img src={HighArrow} alt="arrow" style={{ height: '15px' }} />
                  <p>Как это делаем?</p>
                </a>
              </div>
            </div>
            <div className={`${styles.line} ${styles.mobile}`}></div>
            <div className={styles['right-container']}>
              <Accordeon />
            </div>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <div className={styles.image}>
          <img src="https://s3-alpha-sig.figma.com/img/4d90/1e90/a262791d2706bcfad781e8f0cc3580ff?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VJqbDahxnlwwRjPKKCmXtIkNjrJpH6PFYPkkzvg5ZV99FlUyaFShT4lQBbQd-R9DRp5cM7RIogwsGh85z9sdHoJSIQwwnap0Y3A4si839cUy3rm99MiTmznslWUKpGKA55iB8OZy8Qfk83dixENbtnpfkdsEJkpBlQYZh6pTiAqd3VU-bMr5R~T6~a18OfTtY6LuI4xC5wc7vH2SS-FstgmqvaMan2y3r8MkXRLH5NAuYe3rXpTGdZAcx5dfe7TqNFQmTrBUUoMDSS4QZQMmbtnUHBjqpKLk1HbSRuMTFxCsoFXq72Y6staeQnwurWFv2VL0~aQHnrdMyoEAQoSCGQ__" alt="" />
        </div>
      </div>

      <div className={styles.container}>
        <section>
          <div className={styles.grid}>
            <div className={styles['left-container']}>
              <div>
                <h2>Делимся экспертизой c 2014 года</h2>
                <div>
                  <a href="#" style={{ display: 'flex', gap: 12, alignItems: 'center', paddingTop: '24px' }}>
                    <img src={HighArrow} alt="arrow" style={{ height: '15px' }} />
                    <p>Задать вопрос</p>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles['right-container']}>
              <div className={styles.grid}>
                <div className={styles.left}>
                  <div className={styles.item} style={{height: '136px'}}>
                    <p>Делимся в Телеграмме</p>
                  </div>
                  <div className={styles.item}  style={{height: '304px'}}>
                    <p className={styles.large}>Водим экскурсии на Youtube</p>
                  </div>
                  <div className={styles.item} style={{height: '136px'}}>
                    <p>Пишем книги</p>
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.item} style={{height: '464px'}}>
                    <p className={styles.large}>Делаем конференции</p>
                  </div>
                  <div className={styles.item} style={{height: '136px'}}>
                    <p>Ведем колонку в РБК Логистика</p>
                  </div>
                </div>
              </div>
              <div className={styles.description}>
                <p>27 февраля 2013 г. Председатель Правительства РФ Д. Медведев подписал Распоряжение 
                  О присуждении премий Правительства РФ 2012 года в области науки и техники председателю 
                  Координационного совета по логистике, д.т.н., проф. Миротину Л.Б.
                </p>
                <img src={Gerb} alt="Gerb" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section>
          <button className={styles['download-container']}>
            <p>Cобрали всё для вас в один PDF,
              осталось только скачать
            </p>
            <div>
              <h1>Скачать презентацию</h1>
              <img src={Download} alt="Download" />
            </div>
          </button>
        </section>
      </div>

      <SideMenu />
    </>
  )
}

export { Main };