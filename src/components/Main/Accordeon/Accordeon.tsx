import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import './Accordeon.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FC, ReactNode, useState } from 'react';
import { tags1, tags2, tags3, tags4 } from './data';

const Tag: FC<{ children: ReactNode }> = ({ children }) => {
  return <div
    style={
      {
        backgroundColor: 'black',
        padding: '9px 18px',
        borderRadius: 40,
        color: 'white',
        display: 'inline-block',
        margin: '8px'
      }
    }
  >
    <p>{children}</p>
  </div>
}

const Accordeon = () => {
  const [index, setIndex] = useState<number | null>(0);

  const styles = { padding: '16px 0 36px 0', width: '100%' };

  return (
    <AccordionGroup >
      <Accordion
        sx={{ borderBottom: '2px solid black' }}
        expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
        }}
      >
        <AccordionSummary indicator={index === 0 ? <RemoveIcon sx={{ fontSize: 36 }} /> : <AddIcon sx={{ fontSize: 36 }} />} >
          <h3>Консалтинг в логистике</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            КСЛ - ведущая логистическая консалтинговая компания с богатым опытом и превосходным портфолио
            проектов для крупных клиентов, таких как Siemens, Мегафон-Ритейл и Газпромнефть,
            специализирующаяся в создании эффективных логистических систем
          </p>
          <div style={styles}>{tags1.map((tag: string) => <Tag>{tag}</Tag>)}</div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ borderBottom: '2px solid black' }}
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
      >
        <AccordionSummary indicator={index === 1 ? <RemoveIcon sx={{ fontSize: 36 }} /> : <AddIcon sx={{ fontSize: 36 }} />}>
          <h3>Стандарты и аналитика</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>Более 20 лет КСЛ специализируется на создании высокоэффективных логистических систем и объектов,
            выполнив более 280 проектов для Siemens, Мегафон-Ритейл, Сахалин Энерджи, Мосэнерго, Газпромнефть
            и др.
          </p>
          <div style={styles}>{tags2.map((tag: string) => <Tag>{tag}</Tag>)}</div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ borderBottom: '2px solid black' }}
        expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}
      >
        <AccordionSummary indicator={index === 2 ? <RemoveIcon sx={{ fontSize: 36 }} /> : <AddIcon sx={{ fontSize: 36 }} />}>
          <h3>Подготовка к роботизации</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>КСЛ предлагает комплексные консультационные услуги по подготовке к роботизации, помогая клиентам
            внедрить автоматизированные процессы и оптимизировать эффективность своих логистических операций.
          </p>
          <div style={styles}>{tags3.map((tag: string) => <Tag>{tag}</Tag>)}</div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ borderBottom: '2px solid black' }}
        expanded={index === 3}
        onChange={(event, expanded) => {
          setIndex(expanded ? 3 : null);
        }}
      >
        <AccordionSummary indicator={index === 3 ? <RemoveIcon sx={{ fontSize: 36 }} /> : <AddIcon sx={{ fontSize: 36 }} />}>
          <h3>Обучение логистике</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>КСЛ предоставляет специализированные консультационные услуги по обучению логистике, помогая
            компаниям развивать навыки и знания своих сотрудников, чтобы повысить профессионализм и
            эффективность логистических операций
          </p>
          <div style={styles}>{tags4.map((tag: string) => <Tag>{tag}</Tag>)}</div>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  )
}

export { Accordeon };