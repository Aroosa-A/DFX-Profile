const express = require("express");
const PersonalStory = require("../models_take2/personalStory.model");

const router = express.Router();

router.route('/:id').get((req, res) => {
    const id = req.params.id
    PersonalStory.findOne({ userId: id }, (error, personalStory) => {
        if (personalStory) {
            res.json(personalStory)
        } else {
            res.status(404).send(`not found ${error}`)
        }
    })

})
    .post((req, res) => {
        const id = req.params.id
        PersonalStory.findOne({ userId: id }, (error, personalStory) => {
            if (personalStory) {
                personalStory.degrees = req.body.degrees
                personalStory.schooling = req.body.schooling
                personalStory.work = req.body.work
                personalStory.awards = req.body.awards
                personalStory.portfolio = req.body.portfolio

                personalStory.save().then(personalStory => {
                    res.send('data updated')
                })
            } else {
                res.status(404).send(`not found ${error}`)
            }
        })


    })

module.exports = router
