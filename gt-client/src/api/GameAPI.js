import axios from "axios";

const getAllGames = async (limit, offset) => {
  const results = await axios.get(
    `http://192.168.0.182:3007/games?limit=${limit}&offset=${offset}`
  );
  return results.data;
};

const getGamesByIDs = async (ids) => {
  let idList = [];
  ids.forEach((val,idx) => {
    idList.push(val.id);
  })
  const results = await axios.get(`http://192.168.0.182:3007/games/${idList}`);
  return results.data;
};

const getGameBySlug = async (slug) => {
  const results = await axios.get(`http://192.168.0.182:3007/games/slug/${slug}`);
  return results.data;
}

export { getAllGames, getGamesByIDs, getGameBySlug };
