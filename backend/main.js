var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var async = require('async')
var cors = require('cors')
var Task = require('./models/task')
var User = require('./models/user')

var task = require('./services/taskService')
var user = require('./services/userService')





const corsOptions = {
    origin: ["http://localhost:4200"],
    credentials: true,
    methods: "POST, PUT, OPTIONS, DELETE, GET",
    allowedHeaders: "X-Requested-With, Content-Type, authorization"
}



var app = express()
app.use(bodyParser.json())


app.use(cors(corsOptions))
app.options('*', cors(corsOptions));




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
app.use('/user', user.router)


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

