const indexController = {};

indexController.get = (req, res) => res.send("Received a GET HTTP method");
indexController.post = (req, res) => res.send("Received a POST HTTP method");
indexController.put = (req, res) => res.send("Received a PUT HTTP method");
indexController.delete = (req, res) =>
  res.send("Received a DELETE HTTP method");

module.exports = indexController;
