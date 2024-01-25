import Pic1 from '../../assets/pic1.png';
import Pic2 from '../../assets/pic2.png';
import Pic3 from '../../assets/pic3.png';
import Pic4 from '../../assets/pic4.png';
import Pic5 from '../../assets/pic5.png';

export type Names = {
	name: string,
	position: string,
	img: typeof Pic1,
}

export const names: Names[] = [
	{
		name: 'Мария Татарская',
		position: 'менеджер',
		img: Pic1,
	},
	{
		name: 'Владимир Ежов',
		position: 'логист по складам',
		img: Pic2,
	},
	{
		name: 'Владлена Минаева',
		position: 'менеджер',
		img: Pic3,
	},
	{
		name: 'Михаил Рыкский',
		position: 'логист по складам',
		img: Pic4,
	},
	{
		name: 'Тамерлан Сулиев',
		position: 'логист по складам',
		img: Pic5,
	},
]