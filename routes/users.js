var express = require("express");
var router = express.Router();
var insertShici = require("../service/shici.js").insertDocumentForShici;

/* GET users listing. */
router.get("/", function(req, res, next) {
    res.send("respond with a resource");
});

router.get("/shici", function(req, res, next) {
    // res.send('respond with a resource');
    insertShici({ name: "Roy", age: 27 });
});

module.exports = router;
