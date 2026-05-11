import Image from "next/image";
import styles from "./RoverPhoto.module.css";

interface RoverPhotoProps {
  src: string;
  date: string;
  roverName: string;
}

export default function RoverPhoto({ src, date, roverName }: RoverPhotoProps) {
  return (
    <article className={styles.roverCard}>
      <div className={styles.imageWrap}>
        <Image
          className={styles.roverImage}
          src={src}
          alt={`Rover ${roverName} - ${date}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className={styles.meta}>{`Rover: ${roverName}`}</p>
      <p className={styles.meta}>{`Date: ${date}`}</p>
    </article>
  );
}
