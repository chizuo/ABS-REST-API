// Required package dependencies of the scraper api endpoint
const router = require('express').Router();
const axios = require('axios');
const { SCRAPER_API } = require('../../ENV');

router.post('/youtube', async (req, res) => {
    try {
        const response = await axios.post(SCRAPER_API, { url:req.body.url });
        if(response.status === 200) res.status(200).json(response.data);
        else throw new Error(response.message);
    } catch(e) {
        res.status(501).send(e.message);
    }
});

router.put('/youtube', async (req, res) => {
    try {
        if(req.body.contents === undefined) throw new Error("missing contents list");
    } catch {

    }
});


module.exports = router;