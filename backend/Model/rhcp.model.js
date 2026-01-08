import db from "../db/index.js";

export const fetchMusic = async () => {
  const { rows } = await db.query(
    `SELECT * FROM music ORDER BY year_released ASC`
  );
  return rows;
};
