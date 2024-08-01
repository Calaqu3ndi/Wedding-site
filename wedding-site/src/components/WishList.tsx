import React, { useState, useEffect } from "react";
import { fetchWishlist, WishlistItem } from "../services/WishListService";
import "../App.css";
// import workInProgress from '../assets/Work_In_Progress.png'

const Wishlist: React.FC = () => {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWishlist = async () => {
      try {
        const data = await fetchWishlist();
        setItems(data);
      } catch (error) {
        setError("Błąd pobierania z Bazy Danych");
      } finally {
        setLoading(false);
      }
    };

    getWishlist();
  }, []);

  const reserveItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isReserved: true } : item
      )
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista Życzeń</h1>
      <div style={{marginTop: '40px'}}></div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div className="buttonDiv">
              {item.name} - {item.isReserved ? "Zarezerwowane" : "Dostępne"}
              <button
                className="btn-ml-10"
                style={{ visibility: item.isReserved ? "hidden" : "visible" }}
                onClick={() => reserveItem(item.id)}
              >
                Zarezerwuj
              </button>
            </div>
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
