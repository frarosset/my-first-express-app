const usersController = {};

usersController.get = (req, res) =>
  //   res.send("Received a GET HTTP method on user resource");
  res.send(Object.values(req.context.models.users));

usersController.post = (req, res) =>
  res.send("Received a POST HTTP method on user resource");

usersController.put = (req, res) =>
  res.send("Received a PUT HTTP method on user resource");

usersController.delete = (req, res) =>
  res.send("Received a DELETE HTTP method on user resource");

usersController.getId = (req, res) =>
  res.send(req.context.models.users[req.params.userId]);

usersController.putId = (req, res) =>
  res.send(`Received a PUT HTTP method on user/${req.params.userId} resource`);

usersController.deleteId = (req, res) =>
  res.send(
    `Received a DELETE HTTP method on user/${req.params.userId} resource`,
  );

module.exports = usersController;
