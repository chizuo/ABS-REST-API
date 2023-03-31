const router = require("express").Router();
const v1API = require("./v1/api-gateway");

router.use('/v1', v1API);
router.use((req,res) => {
    res.status(501).send("could not complete your request");
});

module.exports = router;