const sessionontroller = {};

sessionontroller.get = (req, res) =>
  res.send(req.context.models.users[req.context.me.id]);

module.exports = sessionontroller;
