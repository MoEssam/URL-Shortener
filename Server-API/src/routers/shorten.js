const express = require('express')
const router = new express.Router()
const Url = require('../models/url')

router.post('/shorten', async (req, res) => {

    const url = new Url(req.body)
    try {
        await url.save()
        //console.log(Url.find({ originalUrl: url }))
        //console.log(req.body.url)
        res.status(201).send(url)
    } catch (e) {
        res.status(400).send(e)
    }

})

module.exports = router