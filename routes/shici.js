var express = require("express");
var router = express.Router();
var {
    insertDocument: insertShici,
    findDocuments: findShici,
    deleteDocuments: deleteShici
} = require("../service/shici.js");

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
    insertShici(shici, () => {
        res.send("insert successed!");
    });
});

router.get("/find", function(req, res, next) {
    console.log("req", req);
    console.log("req.query.body", req.query.body);
    const filter = JSON.parse(req.query.body);
    console.log("filter ", filter);
    findShici(filter, result => {
        console.log("result.length", result.length);
        res.send(result);
    });
});

router.get("/delete", function(req, res, next) {
    console.log("req", req);
    console.log("req.query.body", req.query.body);
    const delItem = JSON.parse(req.query.body);
    console.log("delItem ", delItem);
    deleteShici(delItem, result => {
        console.log("result.length", result.length);
        res.send(result);
    });
});

module.exports = router;
