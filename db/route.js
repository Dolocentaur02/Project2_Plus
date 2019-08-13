const express = require("express");
const router = express.Router();
const profileController = require("./controllers");

router.get("/", profileController.index);
router.post("/", profileController.create);
router.get("/:id", profileController.show);
router.put("/:id", profileController.update);
router.delete("/:id", profileController.destroy);

module.exports = router;  