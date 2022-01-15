const {
  Router
} = require("express");
const router = Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/usersControllers");

router
  .route("/")
  .get(getUsers)
  .post(createUser);

///sfasfasgasga

router.route("/:id").delete(deleteUser).put(updateUser);

module.exports = router;