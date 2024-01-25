import styles from './Project.module.scss';
import Circle from '../../assets/circle.svg';
import PetrovichImage1 from '../../assets/petrovicImage1.png';
import Warning from '../../assets/warning.svg';
import Quotes from '../../assets/quotes.svg';
import Image23 from '../../assets/image 23.png';
import Swoosh from '../../assets/Swoosh.svg';
import { names } from './namesData';

const Project = () => {
  return (
    <>
      <div className={styles.container}>
        <section>
          <div className={styles.flex}>
            <p>Проекты</p>
            <img src={Circle} alt="" />
            <p>Петрович</p>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section>
          <div className={`${styles.border} ${styles['grid-container']}`}>
            <div className={`${styles.grid} ${styles.top}`}>
              <div className={styles['left-container']}>
                <h2>Аудит логистических процессов</h2>
              </div>
              <div className={styles['right-container']}>
                <div className={styles.image}>
                  <img src={PetrovichImage1} alt="" />
                </div>
                <p>Офлайн-сеть СТД «Петрович» состоит из более чем 300 магазинов,
                  которые расположены в 11 регионах России. Доставляет товары в 630
                  городов России. На момент выполнения проекта, ежегодный рост грузооборота
                  компании составлял 25-30%. Только в 2022 году «Петрович» доставил 3,2 млн
                  заказов.</p>
              </div>
            </div></div>

        </section>
      </div>

      <div className={styles.container}>
        <section>
          <div className={`${styles.border} ${styles['grid-container']}`}>
            <div className={`${styles.grid}`}>
              <div className={styles['left-container']}>
                <h4>Что беспокоило?</h4>
              </div>
              <div className={styles['right-container']}>
                <p>
                  Основной «болью» компании была низкая эффективность складских помещений.
                  Это стало особенно заметно после того, как «Петрович» начал развивать направление
                  e-commerce. Привычных логистических решений уже не хватало, сотрудники склада часто
                  ошибались при сборке заказа, или слишком много времени тратили на поиск необходимого
                  товара. Было понятно, что без быстрой и точной логистики, которая способна справиться
                  с большим объемом заказов, бизнес не сможет добиться своих амбициозных целей.
                  Соответственно нужна была перестройка процессов склада под омниканальность.
                </p>
                <p>По мнению самих представителей «Петровича» низкая эффективность складов и логистики
                  была связана с двумя основными ошибками:</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section>
          <div className={styles['grid-3']}>
            <div></div>
            <div className={styles.white}>
              <div>
                <img src={Warning} alt="" />
                <h4>Компания собственными силами проектировала и вводила в
                  эксплуатацию логистические объекты.
                </h4>
                <p>Провести аудит складской базы, чтобы выявить ошибки,
                  оценить из критичность и понять, как их исправить.
                </p>
              </div>
            </div>
            <div className={styles.white}>
              <div>
                <img src={Warning} alt="" />
                <h4>
                  Складские бизнес-процессы не были автоматизированы.
                </h4>
                <p>
                  Практика показывала, что с процессами в целом что-то не так,
                  но в «Петровиче» не могли понять, что именно. С одной стороны
                  казалось, что нужно автоматизировать базы с помощью WMS, чтобы
                  улучшить аналитику и сократить количество ошибок. Но с другой,
                  было не ясно, где с точки зрения KPI складов есть пробелы, на
                  сколько все плохо по сравнению с рынком, и какие из этих проблем
                  можно решить с помощью WMS.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section>
          <div className={`${styles.border} ${styles['grid-container']}`}>
            <div className={styles.image}>
              <img src={PetrovichImage1} alt="" />
            </div>
            <div className={`${styles.grid}`}>
              <div className={styles['left-container']}>
                <h4>Что мы сделали?</h4>
              </div>
              <div className={styles['right-container']}>
                <p>
                  Вместе с представителями «Петровича» мы определили список задач, которые для них важны.
                </p>
                <ul>
                  <li><p>Провести аудит складской базы, чтобы выявить ошибки, оценить из критичность и понять, как их исправить;</p></li>
                  <li><p>Сравнить компанию с отраслью и понять, где логистика неэффективна;</p></li>
                  <li><p>Спроектировать склад с выверенной топологией, технологией и процессом, который потом можно будет Масштабировать в регионы экспансии;</p></li>
                  <li><p style={{ paddingBottom: '26px' }}>Определить функционал будущей WMS.</p></li>
                </ul>
                <p>Проект проходил в три этапа и в общем занял два месяца. Около 70% работы мы выполняли
                  удаленно, из офиса – выгружали и проверяли мастер-данные по товародвижению за три года,
                  делали инженерные расчеты и разрабатывали чертежи. Но 30% задач можно было закрыть только
                  на месте - мы выезжали на склад, и проводили аудит с помощью чек-листа, в котором было
                  более 400 параметров для проверки. Такой подход позволяет исключить ошибки, связанные с
                  человеческим фактором. Если сотрудник может не выспаться, или быть в плохом настроении,
                  то чек-лист всегда стабилен.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={`${styles.container} ${styles.white}`}>
        <section>
          <div className={`${styles['grid-container']}`}>
            <div className={`${styles.grid}`}>
              <div className={styles['left-container']}>
                <h4>Этап I</h4>
                <div>
                  <img src={Quotes} alt="" />
                  <p>
                    Почему не стоит считать товары в штуках, метрах, литрах и деньгах? Когда коммерческие
                    отделы (закупки, продажи) смотрят на остатки продукции в этих единицах измерения, у них
                    формируется неверная картина происходящего в реальности. Например, им может казаться,
                    что запасы уменьшаются, их пора пополнять, а на самом деле склад переполнен. Так бывает,
                    если объемная продукция стоит существенно дешевле, чем та, что стоит дороже и не занимает
                    много места. Аналогичная ситуация с дефицитом ресурсов на обработку "входа" и "выхода",
                    который возникает из-за того, что компания ориентируется на «штуки» и денежные единицы.
                    В то же время для логистики трудоемкость измеряется в куб. м., тоннах, квантах входа и
                    выхода.
                  </p>
                </div>

              </div>
              <div className={styles['right-container']}>
                <h4 style={{ paddingBottom: '26px' }}>Пересчитали весь товаропоток в кубах и тоннах,
                  нашли лишний «воздух»
                </h4>
                <p>
                  Обычно компании ведут учет движения продукции в штуках,
                  метрах, литрах и денежных единицах. Но этого недостаточно,
                  потому что данные в таких единицах измерения не дают достоверной
                  картины. На их основании нельзя проводить аналитику и принимать решения.
                  Поэтому мы перевели все в кубы и тонны. Это позволило корректно
                  проанализировать ретроспективные потоки на складе.
                </p>
                <p>Далее мы сформировали решения, которые позволили улучшить параметры
                  товаропотоков. Например, снизить их неравномерность и уменьшить количество
                  агрегатов обслуживания на складе: операционного персонала, погрузочно-разгрузочной
                  техники и т.д. Это получилось сделать после ABC-, XYZ- и DEF-анализов
                  товаропотоков. То есть, мы проверили их на оборачиваемость, неравномерность
                  и трудоемкость в обработке, соответственно.
                </p>
                <p>Одним из самых интересных выводов анализа стало то, что «Петрович» хранит на складе
                  слишком много «воздуха» – высота мест хранения не соответствовала весо-габаритным
                  характеристикам продукции. А ведь это значительные потери денег. Но их удалось
                  устранить после перехода на пять типоразмеров (стандартов) ячеек, разработанных
                  в проекте.
                </p>
                <p>Когда подбираете оптимальные высоты ячеек в соответствии с весогабаритными
                  характеристиками продукции, важно исключить ситуацию, при которой создается большое
                  количество диапазонов. Иначе, в условиях высокой ротации ассортимента, это приведет
                  к дефициту мест под номенклатуру продукции с соответствующими размерами. Правильный
                  путь – применить алгоритм, который позволяет определить наиболее «массовые» диапазоны
                  в течение года даже при ротации продукции.
                </p>
                <p>Например, 30% наименований продукции можно разместить без потери полезного объема
                  в ячейки высотой 900 мм., 25% - в ячейки 1,1 тыс. мм., 20% - в 1,5 тыс. мм., 15% в 1,8
                  тыс. мм, и 10% в 2,1 тыс. мм. Этот алгоритм, который заложен в автоматизированной
                  системе «LogicStore» позволяет также корректно рассчитать необходимое количество ячеек
                  с учетом запаса по каждой товарной позиции.
                </p>

                <div className={styles.image}>
                  <img src={Image23} alt="" style={{ paddingBottom: '16px' }} />
                </div>
                <p className={styles.grey}>Пример неэффективного использования ячеек. Высота самой высокой паллеты
                  – не больше 40% от высоты ячейки хранения. Паллеты по бокам еще ниже. Это
                  значит, что можно поднять оранжевую перекладину выше сантиметров на 50, а
                  в оставшееся посередине место уложить, допустим, содержимое ячейки, выделенное
                  зеленым кружком. Если высота ячеек используется не полностью, то всегда есть
                  место для оптимизации.
                </p>
                <p>На этом же этапе мы заложили прогнозное изменение объемов запасов и грузооборота.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={`${styles.container} ${styles.white}`}>
        <section>
          <div className={`${styles['grid-container']}`}>
            <div className={`${styles.grid}`}>
              <div className={styles['left-container']}>
                <h4>Этап II</h4>
              </div>
              <div className={styles['right-container']}>
                <h4 style={{ paddingBottom: '26px' }}>Обнаружили слишком длинные пробеги, простои,
                  низкий уровень сервиса и еще 17 ошибок. Помогли их решить
                </h4>
                <p>Чтобы выявить отклонения в организации процессов, причины
                  неэффективностей и потерь, мы провели аудит внутренних процессов
                  и методологий. Для этого использовали методику, которая включает в
                  себя 980 проверочных пунктов.
                </p>
                <p>Диагностика позволила найти 20 значимых ошибок в организации процессов
                  и выбранных технологиях. Например:
                </p>
                <p>
                  <b> Длинные пробеги персонала и техники при комплектации заказов.</b> Из-за того,
                  что продукция была расположена на складе только по товарным группам без учета
                  оборачиваемости и частоты обращения, пробеги были увеличены на 27% по сравнению
                  с результатами моделирования. Эту проблему решили с помощью оптимального размещения
                  товаров по АВС, XYZ, DEF анализу.
                </p>
                <p>
                  <b>Низкопроизводительные и непроизводительные операции.</b> Представители «Петровича» еще за
                  два года до проведения аудита выявили самый массовый источник непроизводительных операций
                  – ошибки при комплектации и пересортица в зоне хранения. Из-за них компания несла убытки на
                  потерянных позициях, а также теряла лояльность клиентов и время комплектовщиков, которые не
                  находили нужную продукцию. Решить эти проблемы пытались через запуск процесса постоянной ревизии,
                  выделив на нее большой штат ревизоров. Но это было дорого и все равно допускались ошибки. Мы
                  разработали для «Петровича» алгоритм, внедренный в WMS систему, который сокращал ошибки на уровне
                  стандарта 0PPM (менее одной ошибки на миллион выполняемых операций). Это позволило сэкономить и
                  минимизировать ошибки.
                </p>
                <p>
                  <b>Низкий уровень сервиса.</b> Из-за неправильного расчета площади зоны комплектации и технологии ее работы
                  , уровень ошибок при отгрузках был в «красной зоне» KPI. Например, из-за ошибки при комплектации в
                  заказы одних клиентов могли попасть "чужие" товары других клиентов.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section>
          <div className={`${styles.border} ${styles['grid-container']}`}>
            <div className={`${styles.grid}`}>
              <div className={styles['left-container']}>
                <h4>Результаты</h4>
              </div>
              <div className={styles['right-container']}>
                <p>После того, как мы завершили проект, наши коллеги из «Петровича»
                  внедрили все предложенные изменения в работу. Спустя какое-то время
                  они оценили, как это повлияло на результаты бизнеса. Пожалуй, главное
                  достижение, к которому приложил руку проект КСЛ – лидерство «Петровича»
                  в e-com продажах, в том числе в период пандемии 2020 года. Это стало
                  возможным благодаря скорости логистического сервиса, безошибочности в
                  комплектации и форматам обслуживания.
                </p>
                <p>Какие еще результаты отметили:</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section>
          <div className={styles['grid-3']}>
            <div></div>
            <div className={styles.white}>
              <div>
                <img src={Swoosh} alt="" />
                <h4>Снизились суммарные затраты на грузообработку
                </h4>
                <p>Это произошло по трем причинам: снизился простой персонала и
                  техники, а также сократилось количество их пробегов, прекратились
                  потери из-за непроизводительных операций).
                </p>
              </div>
            </div>
            <div className={styles.white}>
              <div>
                <img src={Swoosh} alt="" />
                <h4>
                  Расширился предел вместимости склада
                </h4>
                <p>
                  Теперь «Петрович» может пользоваться им еще в течение пяти,
                  не прибегая к реконструкции или аренде дополнительных складских помещений.
                </p>
              </div>
            </div>
            <div></div>
            <div className={styles.white}>
              <div>
                <img src={Swoosh} alt="" />
                <h4>
                  Компания перестала быть зависимой от знаний персонала
                </h4>
                <p>
                  После того, как внедрила WMS и технологии для сборки заказов.
                </p>
              </div>
            </div>
            <div className={styles.white}>
              <div>
                <img src={Swoosh} alt="" />
                <h4>
                  Улучшились показатели NPS при продажах
                </h4>
                <p>
                  И в этом есть существенный вклад логистики.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section>
          <div className={`${styles.border}`}>
            <p style={{ padding: '24px 0' }}>Над проектом работали</p>
            <div className={styles.names}>
              {
                names.map((item) => (
                  <div className={styles.name} key={item.name}>
                    <div className={styles.image}>
                      <img src={item.img} alt="" />
                    </div>
                    <div>
                      <p>{item.name}</p>
                      <p style={{fontSize: '15px'}}>{item.position}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export { Project }