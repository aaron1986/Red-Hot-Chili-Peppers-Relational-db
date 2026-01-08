TRUNCATE TABLE
    studio_albums,
    bootlegs,
    singles,
    music
RESTART IDENTITY CASCADE;

-- Seed parent table
\copy music(title, cover_img, year_released, release_type) FROM '/home/aaron/northcoders/React_Projects/relational_rhcp_project/src/assets/CSV_Files/music.csv' CSV HEADER;

-- Seed child tables
\copy studio_albums(music_id, album_genre) FROM '/home/aaron/northcoders/React_Projects/relational_rhcp_project/src/assets/CSV_Files/studio_albums.csv' CSV HEADER;

\copy bootlegs(music_id, recording_location, quality) FROM '/home/aaron/northcoders/React_Projects/relational_rhcp_project/src/assets/CSV_Files/bootlegs.csv' CSV HEADER;

\copy singles(music_id, billboard_hot_100_position) FROM '/home/aaron/northcoders/React_Projects/relational_rhcp_project/src/assets/CSV_Files/singles.csv' CSV HEADER;

