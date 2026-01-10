import { useEffect, useState } from "react";
import supabase from "../../backend/config/supabase.client";

export default function Rhcp() {
  const [music, setMusic] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMusic = async () => {
      const { data, error } = await supabase
        .from("music")
        .select("id, title, cover_img, year_released, release_type")
        .order("year_released", { ascending: true });

      if (error) {
        console.error(error);
        setError(error.message);
      } else {
        setMusic(data);
      }
    };

    fetchMusic();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className="albums_page">
      <h1>Red Hot Chili Peppers</h1>

      <div className="img-container">
        {music.map((item) => (
          <div className="album_page" key={item.id}>
            <h2>{item.title}</h2>

            {item.cover_img && (
              <img
                src={item.cover_img}
                alt={item.title}
                className="card_image"
              />
            )}

            <p className="album_page_description">
              Release type: {item.release_type.replace("_", " ")}
            </p>

            <p className="album_page_description">
              Released in {item.year_released}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
