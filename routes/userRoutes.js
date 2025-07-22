const express = require("express");

const {
  register,
  checkUserExists,
  getUserByUID,
  updateLastLogin,
  updateUserProfile,
} = require("../controller/user.controller");

const verifyJWT = require("../middleware/verifyJWT");
const checkSubscriptionExpire = require("../middleware/checkSubscription");

const router = express.Router();

router.post("/users/register", register);
router.get("/users/:uid/check-exist", checkUserExists);
router.get(
  "/users/user-data",
  verifyJWT,
  checkSubscriptionExpire,
  getUserByUID
);
router.patch("/users/:uid/last-login", updateLastLogin);

router.patch("/users/update", verifyJWT, updateUserProfile);

module.exports = router;
