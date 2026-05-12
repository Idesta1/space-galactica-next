import Image from "next/image";
import styles from "./Footer.module.css";

interface SocialMediaItemProps {
  url: string;
  title: string;
  icon: string;
}

export const SocialMediaItem = ({ url, title, icon }: SocialMediaItemProps) => {
  return (
    <li className={styles.footerListItem}>
      <a href={url} title={title}>
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className={styles.socialIcon}
        />
      </a>
    </li>
  );
};

export default SocialMediaItem;
