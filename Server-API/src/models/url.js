const mongoose = require('mongoose')
const shortid = require('shortid')

const urlSchema = new mongoose.Schema({

    urlCode: {
        type: String

    },
    shortUrl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        required: true
    },
})

urlSchema.pre('save', async function (next) {
    const originalUrl = this
    originalUrl.urlCode = shortid.generate()

    next()

})

const Url = mongoose.model('Url', urlSchema)

module.exports = Url