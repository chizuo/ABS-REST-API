const router = require("express").Router();
const v1API = require("./v1/api-gateway");

router.use('/v1', v1API);
router.use((req,res) => {
    res.status(500).send("invalid route");
});

module.exports = router;