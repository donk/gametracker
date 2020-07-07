const axios = require("axios");

const headers = {
  Accept: "application/json",
  "user-key": process.env.IGDB_KEY,
};

const gameFields = `involved_companies.developer, involved_companies.publisher, involved_companies.supporting, 
  involved_companies.company.name, involved_companies.company.websites.url, artworks.url, release_dates.*, similar_games, 
  first_release_date, category, websites.*, videos.name, videos.video_id, cover.url, genres.*, name, platforms.*, total_rating, 
  screenshots.url, slug, summary, time_to_beat.*, themes.name, game_modes.*`;

module.exports = {
  all: function (offset, limit, platforms, filter) {
    let platformQuery = "";
    if (platforms){
     platformQuery = `& platforms = (${platforms})`;
    }
    const sortBy = `sort popularity desc; where total_rating >= 20 & themes != (42) ${platformQuery} ${filter};`;
    const queryString = `fields ${gameFields}; offset ${offset}; limit ${limit}; ${sortBy}`;
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
