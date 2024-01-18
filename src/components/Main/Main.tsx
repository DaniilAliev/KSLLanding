import styles from './Main.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from './data';
import { Item } from './Item';
import HighArrow from '../../assets/highArrow.svg';
import { Accordeon } from './Accordeon';

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

      <div className={styles.container}>
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
            <div className={styles['right-container']}>
              <Accordeon />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export { Main };