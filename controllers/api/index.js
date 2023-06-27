const router = require("express").Router();
router.post('/signup', (req, res) => {
    console.log('sign up',req.body)
    res.redirect('/')
})
module.exports = router;