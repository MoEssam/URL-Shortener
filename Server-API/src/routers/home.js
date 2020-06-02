const express = require('express')
const router = new express.Router()

router.get('/home', async (req, res) => {
    res.send('Home Page')
})

module.exports = router