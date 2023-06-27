const router = require("express").Router();
router.post('/signup', (req, res) => {
    //TODO: query the database to insert new user using req.body
    console.log('sign up',req.body)
    res.redirect('/')
})

router.post('/login', (req, res) => {
    //TODO: query the database to log in a user
    console.log('login',req.body)
    res.redirect('/')
})
module.exports = router;