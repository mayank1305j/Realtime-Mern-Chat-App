const router = require("express").Router();

const {
  addMessage,
  getAllMessages,
} = require("../controllers/messageController.js");

router.post("/addmsg", addMessage);
router.post("/getAllMessages", getAllMessages);

module.exports = router;
