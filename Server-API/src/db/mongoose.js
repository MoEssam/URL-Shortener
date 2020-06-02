const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/url-shortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const URL = mongoose.model('URL', {
    url: {
        type: String,
        required: true
    }
})