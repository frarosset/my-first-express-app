const { v4: uuidv4 } = require("uuid");

const messagesController = {};

messagesController.get = (req, res) =>
  //   res.send("Received a GET HTTP method on user resource");
  res.send(Object.values(req.context.models.messages));

messagesController.post = (req, res) => {
  const id = uuidv4();

  const message = { id, text: req.body.text, userId: req.context.me.id };

  req.context.models.messages[id] = message;

  return res.send(message);
};

messagesController.getId = (req, res) =>
  res.send(req.context.models.messages[req.params.messageId]);

messagesController.deleteId = (req, res) => {
  const { [req.params.messageId]: message, ...otherMessages } =
    req.context.models.messages;

  req.context.models.messages = otherMessages;

  return res.send(message);
};

messagesController.putId = (req, res) => {
  req.context.models.messages[req.params.messageId].text = req.body.text;

  return res.send(req.context.models.messages[req.params.messageId]);
};

module.exports = messagesController;
