import style from './Item.module.scss';
import { Data } from '../data';
import { FC } from 'react';

type Item = {
	item: Data,
	index: number,
}

const Item: FC<Item> = ({ item, index }) => {
	return <div className={style.item} style={{ backgroundImage: `url(${item.image})` }}>
		{(index === 0 || index === 4) &&
			<div className={style.flex}>
				<p>{item.year}</p>
				<div>
					<p className={style.company}>{item.company}</p>
					<p className={style.text}>{item.text}</p>
				</div>
			</div>
		}
		{(index === 1 || index === 3) &&
			<div className={style.flex}>
				<div>
					<p className={style.company}>{item.company}</p>
					<p className={style.text}>{item.text}</p>
				</div>
				<p>{item.year}</p>
			</div>
		}
		{(index === 2) &&
			<p className={style.expo}>Московский международный логистический форум</p>
		}

	</div>
}

export { Item };