// app/contexts/WishlistContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface WishlistPlanet {
  name: string;
  thumbnail: string;
}

interface WishlistContextType {
  planetsWishlist: WishlistPlanet[];
  wishlistCount: number;
  isPlanetInWishlist: (name: string) => boolean;
  togglePlanetSelection: (name: string, thumbnail: string) => void;
  addPlanetToWishlist: (name: string, thumbnail: string) => void;
  removePlanetFromWishlist: (name: string) => void;
  addToWishlist: () => void;
  removeFromWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [planetsWishlist, setPlanetsWishlist] = useState<WishlistPlanet[]>([]);

  const wishlistCount = planetsWishlist.length;

  const isPlanetInWishlist = (name: string) => {
    return planetsWishlist.some((planet) => planet.name === name);
  };

  const addPlanetToWishlist = (name: string, thumbnail: string) => {
    setPlanetsWishlist((prev) => {
      if (prev.some((planet) => planet.name === name)) {
        return prev;
      }
      return [...prev, { name, thumbnail }];
    });
  };

  const removePlanetFromWishlist = (name: string) => {
    setPlanetsWishlist((prev) => prev.filter((planet) => planet.name !== name));
  };

  const togglePlanetSelection = (name: string, thumbnail: string) => {
    if (isPlanetInWishlist(name)) {
      removePlanetFromWishlist(name);
      return;
    }
    addPlanetToWishlist(name, thumbnail);
  };

  const addToWishlist = () => {
    addPlanetToWishlist(
      `Custom planet ${planetsWishlist.length + 1}`,
      "/destination/destination_img/image-europa.png",
    );
  };

  const removeFromWishlist = () => {
    setPlanetsWishlist((prev) => prev.slice(0, -1));
  };

  return (
    <WishlistContext.Provider
      value={{
        planetsWishlist,
        wishlistCount,
        isPlanetInWishlist,
        togglePlanetSelection,
        addPlanetToWishlist,
        removePlanetFromWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
};
