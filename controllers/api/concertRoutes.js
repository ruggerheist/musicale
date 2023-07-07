const router = require('express').Router();
const { Concert, User, UserConcert } = require('../../models');
const withAuth = require('../../utils/auth');

//The /api/concerts endpoint

router.get('/', withAuth, async (req, res) => {
    try {
        //we need to use UserConcert because that is what has the association with the user
        const concertData = await UserConcert.findAll({
        where: {
            user_id: req.session.user_id
        }
        });
    
        const concerts = concertData.map((concert) => concert.get({ plain: true }));
    
        res.render('concerts', {
        concerts,
        logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    // console.log(res);
    try {
        const existingConcert = await Concert.findOne({
            where: {
                event_id: req.body.event_id
            }
        })
        console.log(existingConcert)
        let newConcert;
        if (!existingConcert) {
            newConcert = await Concert.create(req.body)
        }
        //should concert be UserConcert? bug on calendar when concert results render (YESSS)
        const newUserConcert = await UserConcert.create({
        user_id: req.session.user_id,
        concert_id: existingConcert ? existingConcert.id : newConcert.id
        });
    
        res.status(200).json({
            title: existingConcert ? existingConcert.title : newConcert.title,
            url: existingConcert ? existingConcert.url : newConcert.url,
            start: existingConcert ? existingConcert.start : newConcert.start,
            event_id: existingConcert ? existingConcert.event_id : newConcert.event_id
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const concertData = await Concert.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
        });
    
        if (!concertData) {
        res.status(404).json({ message: 'No concert found with this id!' });
        return;
        }
    
        res.status(200).json(concertData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
