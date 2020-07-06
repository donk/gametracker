import axios from "axios";
import platformIDs from '../components/PlatformIDs';
import {findItem} from '../util/array';

const getAllGames = async (limit, offset, platforms) => {
  const platformList = platforms.filter((val) => {
    if (val === ""){
      console.log('huh');
      return false;
    } 
    return true;
  })
  .map((val) => {
    const platformInfo = findItem(platformIDs,{slug:val},'slug');
    if (platformInfo){
      console.log(platformInfo);
      return platformInfo.id;
    }
  });
  console.log(platformList);
  const results = await axios.get(
    `http://192.168.0.182:3007/games?limit=${limit}&offset=${offset}&platforms=${platformList.join()}`
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
