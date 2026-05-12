import Image from "next/image";
import styles from "./DestinationPage.module.css";

interface PlanetCardProps {
  name: string;
  description: string;
  thumbnail: string;
  isSelected: boolean;
  togglePlanetSelection: (name: string, thumbnail: string) => void;
}

const PlanetCard = ({
  name,
  description,
  thumbnail,
  isSelected,
  togglePlanetSelection,
}: PlanetCardProps) => {
  return (
    <div className={styles.planetCard}>
      <Image
        className={styles.planetThumbnail}
        src={thumbnail}
        alt={`${name} thumbnail`}
        width={150}
        height={150}
      />
      <div className={styles.planetDescription}>
        <h2>
          <span style={{ letterSpacing: "0.08em" }}>{name.toUpperCase()}</span>
          {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button
        className={styles.addWishlistItemButton}
        onClick={() => togglePlanetSelection(name, thumbnail)}
      >
        {isSelected ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}
      </button>
    </div>
  );
};

export default PlanetCard;
