import { NavProps } from './sidebar.interface';
import styles from './sidebar.module.scss';
import { NavMenu } from './sidebar__nav-menu';


export function NavBar (props: NavProps) {
  const { navItems } = props;
  return (
    <nav className={styles['sidebar__nav']}>
      <NavMenu navItems={navItems} />
    </nav>
  )
}
