export type Data = {
  year: number | string,
  company: string,
  text: string,
  image: string,
}

const data = [
  {
    year: 2019,
    company: 'Decathlon',
    text: 'Автоматическийраспределительный центрв соответствии с e-comстратегией 20/40',
    image: 'card1.png'
  },
  {
    year: 2020,
    company: 'Восток-Сервис',
    text: 'Аудит и оптимизация складской системы',
    image: 'card2.png'
  },
  {
    year: '',
    company: 'Московский международный логистический форум',
    text: '',
    image: 'card3.png'
  },
  {
    year: 2020,
    company: 'Мосэнерго',
    text: 'Разработка моделей организации складского хозяйства',
    image: 'card5.png'
  },
  {
    year: 2020,
    company: 'Петрович',
    text: 'Аудит логистических процессов',
    image: 'card6.png'
  },
]

export default data;