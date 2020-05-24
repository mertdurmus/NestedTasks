var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var async = require('async')

var Task = require('./models/task')
var task = require('./services/taskService')


var app = express()
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/task',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => {
        if (!error) {
            console.log('connected to db')
        }
        else {
            console.log('hata')
        }
    });

app.use('/task', task.router)



app.listen(7200)





/*
async function start(){
    const task =  await Task.findOne({ id: 3 });
    var id = task.subTasks[0]
    const subtask =  await Task.findById(id);
    console.log(subtask.id)
    console.log(task.name)
}
start()
*/

