const router = require('express').Router();
const { Concert, User, UserConcert } = require('../../models');
const withAuth = require('../../utils/auth');

//The /api/concerts endpoint

// creates concert based on user save 
router.post('/', withAuth, async (req, res) => {
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

// deletes concert by user 
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const concertData = await UserConcert.destroy({
            where: {
                concert_id: req.params.id,
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
        console.log(err);
    }
});

module.exports = router;
