import { fetchMusic } from "../Model/rhcp.model.js";

export const getMusic = async (req, res, next) => {
  try {
    const music = await fetchMusic();
    res.status(200).send({ music });
  } catch (err) {
    next(err);
  }
};