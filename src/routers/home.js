const express = require('express')
const router = new express.Router()

router.get('/', async (req, res) => {
    res.send('Home Page')
})

module.exports = router