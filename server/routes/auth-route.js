const router = require('express').Router();

//github login

router.get('/github', (req, res) => {
    res.send('logging into github')
})