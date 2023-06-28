const router = require("express").Router();
const session = require("express-session");
const User = require("../../models");

router.post('/register', async (req, res) => {
    console.log("Register new user request", req);
    try {
        const newUser = await User.({ name: req.body.name, email: req.body.email, password: req.body.password })
        if (!newUser) {
            res.status(400).send("Failed to create user")
            return;
        }
        console.log(newUser);
        res.status(200).send("User successfully created.")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/login', (req, res) => {
    //TODO: query the database to log in a user
    console.log('login', req.body)
    res.redirect('/')
})

module.exports = router;