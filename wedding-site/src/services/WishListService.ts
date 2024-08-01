// src/services/wishlistService.ts

export interface WishlistItem {
    id: number;
    name: string;
    isReserved: boolean;
  }
  
  export const fetchWishlist = async (): Promise<WishlistItem[]> => {
    const response = await fetch('src/data/wishlist.json'); // Docelowo zmienić na URL API
    if (!response.ok) {
      throw new Error('Błąd pobierania z bazy danych');
    }
    const data = await response.json();
    return data;
  };
  