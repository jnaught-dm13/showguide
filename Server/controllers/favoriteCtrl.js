const getFavorite = (req, res) => {
  // console.log("Get Fav Hit", req.user.id);
  //   const { userid } = req.body;
  req.app
    .get("db")
    .getFavorite([req.user.id])
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => res.status(500).json(err));
};
const addToFavorite = (req, res) => {
  // console.log("add to Favorite hit", req.body, req.user.id);
  const { id, name, image, genre, network } = req.body;
  req.app
    .get("db")
    .addToFavorite([id, name, image, genre, network, req.user.id])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};
const removeFavorite = (req, res) => {
  req.app
    .get("db")
    .removeFavorite([req.user.id, req.params.id])
    .then(response => getFavorite(req, res))
    .catch(err => console.log(err));
};
const updateWatch = (req, res) => {
  // console.log("watch update hit", req.body, req.user.id);
  const { show, id, season } = req.body;
  req.app
    .get("db")
    .updateWatch([show, season, id, req.user.id])
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => res.status(500).json(err));
};
const getWatched = (req, res) => {
  // console.log(" get watch hit", req.params);
  const { show } = req.params;
  req.app
    .get("db")
    .getWatched([show, req.user.id])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};
const removeWatch = (req, res) => {
  console.log("remove watch ", req.params);
  req.app
    .get("db")
    .removeWatch([req.params.ep_id, req.user.id, req.params.show_id])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};
const getCount = (req, res) => {
  console.log(req.params.show_id, req.user.id);
  req.app
    .get("db")
    .getCount([req.params.show_id, req.user.id])
    .then(response => {
      console.log("getCount ", response[0].count);
      res.status(200).json(response[0].count);
    })
    .catch(err => res.status(500).json(err));
};

module.exports = {
  getFavorite,
  addToFavorite,
  removeFavorite,
  updateWatch,
  getWatched,
  removeWatch,
  getCount
};
