const getfavorite = (req, res) => {
  const { user_id } = req.body;
  req.app
    .get("db")
    .getFavorite(user_id)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};
