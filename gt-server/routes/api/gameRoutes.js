const gameController = require("../../controllers/gameController");

module.exports = function (app) {
  // Get all games
  // Format in a small way for cards
  app.post("/games", gameController.getAll);

  // Get game by IDs
  app.get("/games/:ids", gameController.getGamesByIDs);

  app.get("/games/slug/:slug", gameController.getGameBySlug);

  // Get game screenshots
  app.get("/games/screenshots/:ids", function (req, res) {});

  // Get game categories
  app.get("/games/:id/categories", function (req, res) {});

  // Get similar games
  app.get("/games/:id/similar", function (req, res) {});

  // Get game tags
  app.get("/games/:id/tags", function (req, res) {});
};
