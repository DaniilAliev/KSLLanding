import styles from './Item.module.scss';


const Item = ({ item }) => {
  switch (item.type) {
    case 'lower':
      return (
        <div className={styles.item} style={{ backgroundImage: `url(${item.image})` }}>
          <div className={styles.flex}>
            <p>{item.year}</p>
            <div>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        </div>
      );
    case 'upper':
      return (
        <div className={styles.item} style={{ backgroundImage: `url(${item.image})` }}>
          <div className={styles.flex}>
            <div>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.text}>{item.text}</p>
            </div>
            <p>{item.year}</p>
          </div>
        </div>
      );
    case 'hole':
      return (
        <div className={styles.item} style={{ backgroundImage: `url(${item.image})` }}>
          <p className={styles.expo}>Московский международный логистический форум</p>
        </div>
      );
      case 'empty':
        return (
          <div className={styles.item}>
            <div className={styles.flex}>
              <div>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.text}>{item.text}</p>
              </div>
              <p>{item.year}</p>
            </div>
          </div>
        );
    default:
      break;
  }
}

export default Item;