const router = require("express").Router();
const booksController = require("../../controllers/bookControllers");
// matches with /api/books
router.route("/")
.get(booksController.findAll)
.post(booksController.create);
// matches with /api/books/:id
router
.route("/:id")
.get(booksController.findById)
.put(booksController.update)
.delete(booksController.remove);
module.exports = router;