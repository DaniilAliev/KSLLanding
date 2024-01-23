import styles from './CustomLink.module.scss';
import { FC, ReactNode } from "react";

type CustomLink = {
	children: ReactNode,
	path: string,
	route?: string,
}

const CustomLink: FC<CustomLink> = ({ children, path, route }) => {

  return <a href={path} className={`${styles[`custom-link`]} ${route === path ? styles.active : ''}`} >
		{children}
	</a>
}

export { CustomLink };