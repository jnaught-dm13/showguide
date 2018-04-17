const streamBaseURL = "'https://eu-central-api.stream-io-api.com/api/v1.0/'";

const getStream = (req, res) => {
  console.log("Get Stream Hit", req.user.id);
  axios
    .get(`${streamBaseURL}/activities`)
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  getStream
};
