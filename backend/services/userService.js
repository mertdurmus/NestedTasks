var express = require('express')
var Task = require('../models/task')
var router = express.Router()
var jwt = require('jwt-simple')
var User = require('../models/user')


router.post('/register', (request, response) => {
    var userData = request.body
    var user = new User(userData)
    user.save((error, result) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500).send({ message: error })
        }
        return response.status(201).send({message:"user registered succesfully"})
    })
})



router.post('/login', async (request, response) => {
    var userData = request.body
    var user = await User.findOne({email: userData.email})
        if (!user) {
            return response.status(401).send({ message: 'email or oassword invalid' })
        }
        else if(userData.password != user.password){
            return response.status(401).send({ message: 'email or oassword invalid' })
        }
        var payload = {}
        var token = jwt.encode(payload,"xxx")
        return response.status(200).send({token})
    })

var user = { router, checkAuthenticated:(request, response, next)=>{

    if(!request.header('Authorization')){
        return response.status(401).send({message:'unauthorized'})
    }

    try{
        var token = request.header('Authorization').split(' ')[1]
        var payload = jwt.decode(token,'xxx')
    
        if(!payload){
            return response.status(401).send({message:'not available token'})
        }
        next()
    }
    catch(e) {
        return response.status(401).send({message:'not available token'})
    }

} }

module.exports = user