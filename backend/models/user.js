var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name: String,
    email:String,
    password: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
})

module.exports = mongoose.model('User', userSchema)