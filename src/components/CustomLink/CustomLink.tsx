import { Link } from 'react-router-dom';
import styles from './CustomLink.module.scss';
import { FC, ReactNode } from "react";

type CustomLink = {
	children: ReactNode,
	path: string,
	route?: string,
}

const CustomLink: FC<CustomLink> = ({ children, path, route }) => {

  return <Link to={path} className={`${styles[`custom-link`]} ${route === path ? styles.active : ''}`} >
		{children}
	</Link>
}

export { CustomLink };