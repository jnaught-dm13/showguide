const getFavorite = (req, res) => {
  console.log("Get Fav Hit");
  const { id } = req.body;
  req.app
    .get("db")
    .getFavorite([id])
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};
const addToFavorite = (req, res) => {
  console.log("add to Favorite hit", req.body);
  const { id, name, image, genre, network } = req.body;
  req.app
    .get("db")
    .addToFavorite([id, name, image, genre, network])
    .then(response => res.status(200).json(response))
    .then(response => alert("Show added to Favorites!"))
    .catch(err => res.status(500).json(err));
};
const removeFavorite = (req, res) => {
  req.app
    .get("db")
    .removeFavorite([req.user.id, req.params.id])
    .then(response => getFavorite(req, res))
    .catch(err => console.log(err));
};

module.exports = {
  getFavorite,
  addToFavorite,
  removeFavorite
};
