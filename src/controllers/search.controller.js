const MoviesModel = require("../models/movies.model");

module.exports = (req, res) => {
  const searchQuery = req.body.searchQuery;

  let resultItem = "";
  let response = "";

  if (searchQuery.length > 0)
    MoviesModel.find(
      { title: { $regex: new RegExp(searchQuery, "i") } },
      (_err, results) => {
        results.forEach((sResult) => {
          const truncateValue = 30;
          const shortenTitle =
            sResult.title.length > truncateValue
              ? `${sResult.title.substring(0, truncateValue)}…`
              : sResult.title;

          if (sResult.title.indexOf(searchQuery) !== -1)
            resultItem =
              resultItem +
              `<li class="list-group-item"><a class="link-secondary" href="/movie/${sResult.id}">${shortenTitle}</a></li>`;
        });
        if (resultItem === "")
          response = "<li class='list-group-item'>No movie found</li>";
        else response = resultItem;
        res.send({ response: response });
      }
    ).limit(6);
};
