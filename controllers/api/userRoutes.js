const router = require("express").Router();
const session = require("express-session");
const { User, Concert, UserConcert } = require("../../models");

//endpoint is /api/users

//create a new user
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

//login
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
    const userData = await User.findOne(req.params.id, {
      include: [{ model: Concert, as: 'concerts_attended_by_user' }]
    });
    const userId = userData.dataValues.id;
    const userConcerts = await UserConcert.findAll({
      where: { user_id: userId },
      attributes: ['concert_id'],
    });
    let userConcertIds = [];
    userConcerts.forEach((concert) => {
      userConcertIds.push(concert.dataValues.concert_id);
    });
    const userConcertsData = await Concert.findAll({
      where: { id: userConcertIds },
    });
    res.status(200).json(userConcertsData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// get for all concerts by a specific user 
router.get('/:id', async (req, res) => {
  try {
    const userData = await UserConcert.findAll({
      where: { user_id: req.params.id },
      include: [{ model: Concert, as: 'concerts_attended_by_user' }]
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;