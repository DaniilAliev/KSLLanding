import { FC, memo } from 'react';
import styles from './DiscussButton.module.scss';

type DiscussButton = {
	handleClick: () => void
}

export const DiscussButton: FC<DiscussButton> = memo(({ handleClick }) => {
	return (
		<button className={styles.button} onClick={handleClick}>
			<p>Обсудить задачу</p>
		</button>
	)
});