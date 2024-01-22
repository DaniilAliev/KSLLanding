import styles from './MobileNav.module.scss';
import WhiteLogo from '../../../assets/whitelogo.svg'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WhiteTelegram from '../../../assets/WhiteTelegram.svg';
import WhiteWhatsApp from '../../../assets/WhiteWhatsApp.svg';

const MobileNav = ({ isOpen, handleOpen }) => {
	return (
		<div className={`${styles.container} ${isOpen ? styles.active : ''}`}>
			<div className={styles.grid}>
				<div className={styles.flex}>
					<div className={styles.logo}>
						<img src={WhiteLogo} alt="" />
						<p>Логистический консалтинг</p>
					</div>
					<KeyboardArrowUpIcon
						style={
							{
								color: 'white',
								height: '36px',
								width: '36px',
								position: 'relative',
								right: '-5px'
							}
						}
						onClick={handleOpen}
					/>
				</div>

				<div className={styles.main}>
					<div className={styles.flex}>
						<div>
							<a href="#"><h1>Главная</h1></a>
							<a href="#"><h1>Проекты</h1></a>
							<a href="#"><h1>Экспертиза</h1></a>
							<a href="#"><h1>Компания</h1></a>
						</div>
					</div>
				</div>

				<div className={styles.contacts}>
					<div className={styles.flex}>
						<a href='tel:+74957639195'><p>+7 (495) 763-91-95</p></a>
						<div>
							<img src={WhiteTelegram} alt="Telegram" />
							<img src={WhiteWhatsApp} alt="WhatsApp" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { MobileNav }