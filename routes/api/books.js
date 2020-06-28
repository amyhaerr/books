const router = require("express").Router();
const bookController = require("../../controllers/bookControllers");


router.route("/")
.get(bookController.findAll)
.post(bookController.create);


router 
// Post request to save book
    .route("/:id")
    .get(bookController.findById)

    // .post(bookController.savedBook)

    .put(bookController.update)
    .delete(bookController.remove);


    module.exports = router;