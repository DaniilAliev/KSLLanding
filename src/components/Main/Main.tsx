import styles from './Main.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from './data';
import { Item } from './Item';


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
                <Item item={item} index={index}/>
              </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
    
  )
  
}
export { Main };