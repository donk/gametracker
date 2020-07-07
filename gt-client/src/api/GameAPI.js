import axios from "axios";
import platformIDs from "../components/PlatformIDs";
import { findItem } from "../util/array";

const getAllGames = async (limit, offset, platforms, filters) => {
  const platformList = platforms
    .filter((val) => {
      if (val === "") {
        return false;
      }
      return true;
    })
    .map((val) => {
      const platformInfo = findItem(platformIDs, { slug: val }, "slug");
      if (platformInfo) {
        return platformInfo.id;
      }
    });
  
  
  const results = await axios.post(
    `http://192.168.0.182:3007/games?limit=${limit}&offset=${offset}&platforms=${platformList.join()}`,
    {data:{filter:filters}}
  );
  return results.data;
};

const getGamesByIDs = async (ids,is_ids = false) => {
  let idList = [];
  if (!is_ids){
    ids.forEach((val, idx) => {
      idList.push(val.id);
    });
  }else{
    idList = ids;
  }
  const results = await axios.get(`http://192.168.0.182:3007/games/${idList}`);
  return results.data;
};

const getGameBySlug = async (slug) => {
  const results = await axios.get(
    `http://192.168.0.182:3007/games/slug/${slug}`
  );
  return results.data;
};

export { getAllGames, getGamesByIDs, getGameBySlug };
