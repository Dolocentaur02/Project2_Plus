const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/4000', { useNewUrlParser: true })
mongoose.Promise = Promise
module.exports = mongoose