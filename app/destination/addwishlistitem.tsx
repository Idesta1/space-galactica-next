import { MouseEvent, useState } from "react";
import styles from "./DestinationPage.module.css";

interface AddWishlistItemProps {
  onAddWishlistItem: (name: string, thumbnail: string) => void;
}

export const AddWishlistItem = ({ onAddWishlistItem }: AddWishlistItemProps) => {
  const [thumbnail, setThumbnail] = useState("/destination/image-europa.png");
  const [customWishlistItem, setCustomWishlistItem] = useState("");

  const onAddItemPressed = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (customWishlistItem.trim() === "") {
      return;
    }
    onAddWishlistItem(customWishlistItem, thumbnail);
    setCustomWishlistItem("");
    setThumbnail("/destination/image-europa.png");
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        placeholder="Enter planet name.."
        value={customWishlistItem}
        onChange={(e) => setCustomWishlistItem(e.target.value)}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button
        className={styles.addWishlistItemButton}
        onClick={onAddItemPressed}
      >
        ADD CUSTOM
      </button>
    </div>
  );
};
