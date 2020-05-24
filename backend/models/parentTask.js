var mongoose = require('mongoose')
var Task = require('./task').schema

var parentTaskSchema = mongoose.Schema({
    id:Number,
    name:String,
    description:String,
    subTasks: [Task]
})

module.exports = mongoose.model('ParentTask', parentTaskSchema)