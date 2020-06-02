const express = require('express')
const router = new express.Router()
const Url = require('../models/url')

router.get('/:hash', async (req, res) => {
    const urlCode = req.params.hash
    try {
        const urlhash = await Url.findOne({ urlCode }, function (err, doc) {
            if (doc) {
                console.log('APP: Found ID in DB, redirecting to URL')
                return res.redirect(doc.url);
            } else {
                console.log('APP: Could not find ID in DB, redirecting to home')
                res.redirect('http://google.com')
            }
        })
    } catch (e) {
        res.status(500).send()
    }

})

module.exports = router