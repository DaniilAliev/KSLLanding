import { FC } from 'react';
import styles from './Item.module.scss';
import { Data } from './data';
import { Link } from 'react-router-dom';

const Item: FC<{ item: Data }> = ({ item }) => {
  switch (item.type) {
    case 'lower':
      return (
        <Link to='/projects/project'>
          <div className={styles.item} style={{ backgroundImage: `url(${item.image})` }}>
            <div className={styles.flex}>
              <p>{item.year}</p>
              <div>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.text}>{item.text}</p>
              </div>
            </div>
          </div>
        </Link>
      );
    case 'upper':
      return (
        <Link to='/projects/project'>
          <div className={styles.item} style={{ backgroundImage: `url(${item.image})` }}>
            <div className={styles.flex}>
              <div>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.text}>{item.text}</p>
              </div>
              <p>{item.year}</p>
            </div>
          </div>
        </Link>
      );
    case 'hole':
      return (
        <Link to='/projects/project'>
          <div className={styles.item} style={{ backgroundImage: `url(${item.image})` }}>
            <p className={styles.expo}>Московский международный логистический форум</p>
          </div>
        </Link>
      );
    case 'empty':
      return (
        <Link to='/projects/project'>
          <div className={styles.item}>
            <div className={styles.flex}>
              <div>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.text}>{item.text}</p>
              </div>
              <p>{item.year}</p>
            </div>
          </div>
        </Link>
      );
    default:
      break;
  }
}

export default Item;