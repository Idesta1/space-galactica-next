import classNames from "classnames";
import styles from "./Navbar.module.css";
import Link from "next/link";

export const NavItem = ({ title, link, isActive }) => {
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
