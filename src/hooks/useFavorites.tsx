import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('storyswap_favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (item: any) => {
    const isCurrentlyFavorited = favorites.some(fav => fav.id === item.id);
    let updatedFavorites;
    
    if (isCurrentlyFavorited) {
      updatedFavorites = favorites.filter(fav => fav.id !== item.id);
    } else {
      updatedFavorites = [...favorites, item];
    }
    
    setFavorites(updatedFavorites);
    localStorage.setItem('storyswap_favorites', JSON.stringify(updatedFavorites));
    
    return !isCurrentlyFavorited;
  };

  const isFavorited = (itemId: string) => {
    return favorites.some(fav => fav.id === itemId);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorited,
    favoritesCount: favorites.length
  };
};