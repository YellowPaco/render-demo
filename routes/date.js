import express from 'express';
var router = express.Router();

router.get('/', function (req, res) {
    console.log("Getting time!");
    let time = new Date();
    res.type("txt");
    res.send(getTime());
});

router.get('/json', function (req, res) {
    console.log("Getting time (as JSON)");
    let time = new Date();
    res.type("json");
    res.send({
        "now": getTime(),
    })
})

function getTime() {
    return new Date();
}

export default router;