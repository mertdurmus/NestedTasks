var express = require('express')
var Task = require('../models/task')
var router = express.Router()
var user = require('./userService')




router.post('/add', user.checkAuthenticated, (request, response) => {
    var taskData = request.body
    var task = new Task(taskData)
    task.save((error, result) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500).send({ message: error })
        }
        return response.status(201).send({ message: 'success' })
    })
})

router.post('/addSubTask/:parentId', async (request, response) => {
    var parentId = request.params.parentId;
    var taskData = request.body
    var subTask = new Task(taskData)
    subTask.save()
    Task.findOne({ id: parentId }, function (error, task) {
        if (error) {
            return handleError(error);
        }
        task.subTasks.push(subTask);
        task.save();
    });
    response.send(task)
})

router.get('/getTasks', user.checkAuthenticated , async (request, response) => {
    var Tasks = await Task.find({}, '-__v -_id')
    response.send(Tasks)
})



router.get('/getTask/:id', async (request, response) => {
    var id = request.params.id;
    var Tasks = await Task.findOne({ id: id }, '-__v -_id')
    response.send(Tasks)
})



router.get('/getSubTasks/:parentId', async (request, response) => {
    var id = request.params.parentId;

    const task = await Task.findOne({ id: id }, '-__v -_id')

    let subTasks = task.subTasks;
    let result = []

    for (x in subTasks) {
        var id_generic = subTasks[x]
        const subtask = await Task.findById(id_generic);
        result.push(subtask)
    }

    response.send(result)
})

var task = { router }

module.exports = task