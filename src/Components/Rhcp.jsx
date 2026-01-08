import { useEffect, useState } from "react";

export default function Rhcp() {
  const [music, setMusic] = useState([]);

useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/albums`)
    .then((res) => res.json())
    .then((data) => setMusic(data.music))
    .catch((err) => console.error(err));
}, []);


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
              Release type: {item.release_type}
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
