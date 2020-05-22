var express = require('express');
var router = express.Router();


let status = "OPEN";

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/', function (req, res) {
    status = req.body.shop;
    console.log(req.body.shop)
    res.json(status)
})

router.get('/api', function (req, res) {
    res.json(status)
})

module.exports = router;
