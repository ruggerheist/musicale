const router = require("express").Router();
const session = require("express-session");
const { User, Concert, UserConcert } = require("../../models");

//endpoint is /api/users

//creates a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.redirect("/calendar")
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// allows users to login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.redirect("/calendar")
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// get for all concerts by a specific user. see calendar.js for eventListener
router.get('/concerts', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [{
        model: Concert,
        as: 'concerts_attended_by_user'
      }]
    });
    res.status(200).json(userData.concerts_attended_by_user);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // logout
  router.post('/logout', async (req, res) => {
    try {
      if (req.session.logged_in) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;