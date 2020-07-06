const gameQueries = require("../middleware/gameQueries");

module.exports = {
  // Get all games
  getAll: function (req, res) {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 1;
    const platforms = req.query.platforms || "";
    gameQueries
      .all(offset, limit, platforms)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  getGamesByIDs: function (req, res) {
    const games = req.params.ids;
    gameQueries
      .getByIDs(games)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.sendStatus(400);
        console.log(err.message);
      });
  },

  getGameBySlug: function (req, res) {
    const slug = req.params.slug;
    gameQueries
      .getBySlug(slug)
      .then((response) => {
        res.status(200).send(response.data[0]);
      })
      .catch((err) => {
        res.sendStatus(400);
        console.log(err.message);
      });
  },
};
