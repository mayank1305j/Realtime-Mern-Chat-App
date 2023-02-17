const router = require("express").Router();

const {
  setAvatar,
  register,
  login,
  getAllusers,
} = require("../controllers/usersController");

router.post("/register", register);
router.post("/login", login);
router.post("/setavatar/:id", setAvatar);
router.get("/allusers/:id", getAllusers);

module.exports = router;
