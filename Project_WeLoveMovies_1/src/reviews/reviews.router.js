const router = require("express").Router({mergeParams : true});
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/")
    .get(controller.list)
router
    .route("/:reviewId")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.destroy)

module.exports = router;