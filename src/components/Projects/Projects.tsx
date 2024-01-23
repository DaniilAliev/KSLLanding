import styles from './Projects.module.scss';
import data from './data';
import Item from './Item';
import { useState } from 'react';

const selectors = ['Все', 'Пищевой ритейл', 'Интернет-магазины', "Мероприятия", "Непищевой ритейл", "Фармацевтика"]

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const handleButton = () => {
    setVisibleItems(prev => prev + 6)
  };

  return (
    <>
      <div className={styles.container}>
        <section>
          <div className={styles.header}>
            <h2>127 проектов</h2>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section>
          <div className={styles.selectors}>
            {selectors.map((selector) => (
              <div className={styles.item}>
                <p>{selector}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section>
          <div className={styles.items}>
            {data.slice(0, visibleItems).map((item) => <Item item={item} />)}
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section>
          {
            visibleItems !== 18 && <button onClick={handleButton}><p>Показать ещё</p></button>
          }
        </section>
      </div>
    </>
  )
}

export { Projects };