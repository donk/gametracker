const axios = require("axios");

const headers = {
  Accept: "application/json",
  "user-key": process.env.IGDB_KEY,
};

const gameFields = `artworks.url, release_dates.*, category, websites.*, videos.name, videos.video_id, cover.url, genres.*, name, platforms.*, total_rating, screenshots.url, slug, summary, time_to_beat.*`;

module.exports = {
  all: function (offset, limit, platforms, filter) {
    let platformQuery = "";
    if (platforms){
     platformQuery = `& platforms = (${platforms})`;
    }
    const sortBy = `sort popularity desc; where total_rating >= 20 & themes != (42) ${platformQuery} ${filter};`;
    const queryString = `fields ${gameFields}; offset ${offset}; limit ${limit}; ${sortBy}`;
    console.log(queryString);
    return axios.get(process.env.IGDB_URL_GAMES, {
      method: "GET",
      data: queryString,
      headers: headers,
    });
  },

  getByIDs: function (ids) {
    if (Array.isArray(ids)) {
      ids = ids.join();
    }
    const sortBy = `sort popularity desc; where total_rating >= 50 & themes != (42) & id = (${ids}); limit 500;`;
    const queryString = `fields ${gameFields}; ${sortBy};`;
    
    return axios.get(process.env.IGDB_URL_GAMES, {
      method: "GET",
      data: queryString,
      headers: headers,
    });
  },

  getBySlug: function (slug) {
    const queryString = `fields ${gameFields}; where slug="${slug}";`;
    return axios.get(process.env.IGDB_URL_GAMES, {
      method: "GET",
      data: queryString,
      headers: headers,
    });
  },
};
