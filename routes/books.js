const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../controller/books");
//// api/v1/books
router.route("/").get(getBooks).post(createBook);
//// api/v1/book
router.route("/:id").get(getBook).delete(deleteBook).put(updateBook);

module.exports = router;
