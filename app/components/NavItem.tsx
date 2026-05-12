import classNames from "classnames";
import styles from "./Navbar.module.css";
import Link from "next/link";

interface NavItemProps {
  title: string;
  link: string;
  isActive: boolean;
}

export const NavItem = ({ title, link, isActive }: NavItemProps) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default NavItem;
