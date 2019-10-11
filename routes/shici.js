var express = require("express");
var router = express.Router();
var insertShici = require("../service/shici.js").insertDocumentForShici;

/* GET shici listing. */
router.get("/", function(req, res, next) {
    res.send("hello shici api connected by mongodb!");
});

router.get("/add", function(req, res, next) {
    // res.send('respond with a resource');
    console.log("req", req);
    console.log("req.query.body", req.query.body);
    const shici = JSON.parse(req.query.body);
    console.log("shici hahahh ", shici);
    // insertShici({ name: "Roy", age: 27 }, () => {
    insertShici(shici, () => {
        res.send("insert successed!");
    });
});

module.exports = router;
