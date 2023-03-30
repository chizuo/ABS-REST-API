// Required package dependencies of the account end points
const router = require('express').Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { MONGODB_ACCOUNT, MONGODB_HOST, MONGODB_PW, MONGODB_PORT, MONGODB_DB, MONGODB_AUTH } = require('../../ENV/secrets');

const conn = `mongodb://${MONGODB_ACCOUNT}:${MONGODB_PW}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}?authSource=${MONGODB_AUTH}`;

mongoose.connect(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const accountSchema = new mongoose.Schema({
    email: { type: String, index: { unique: true } },
    password: String,
    playlists: { type:[{
        playlist_title: String,
        plid: String,
        clicked: { type: Number, default: 0 },
        contents: { type: [{
            title: String,
            url: String,
            viewed: { type: Boolean, default: false }
        },], default: [] }
    },], default: [] }
});

const Account = mongoose.model('Account', accountSchema);

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPW = await bcrypt.hash(password, 10);
        const newAccount = new Account({
            email,
            password: hashedPW,
        });
        await newAccount.save();
        res.status(201).json(newAccount);
    } catch(e) {
        res.status(500).send(e);
    }
});

module.exports = router;