import { Link } from "react-router-dom";
import styles from './CustomLink.module.scss';
import { FC, ReactNode } from "react";

type CustomLink = {
	children: ReactNode,
	path: string,
}

const CustomLink: FC<CustomLink> = ({ children, path }) => {

  return <Link to={path} className={styles[`custom-link`]} >
		{children}
	</Link>
}

export { CustomLink };