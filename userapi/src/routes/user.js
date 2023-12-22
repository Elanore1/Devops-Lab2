const express = require('express')
const userController = require('../controllers/user')

const userRouter = express.Router()

userRouter
  .post('/', (req, resp) => {
    userController.create(req.body, (err, res) => {
      let respObj
      if(err) {
        respObj = {
          status: "error",
          msg: err.message
        }
        return resp.status(400).json(respObj)
      }
      respObj = {
        status: "success",
        msg: res
      }
      resp.status(201).json(respObj)
    })
  })
  .get('/:username', (req, resp) => { // Express URL params - https://expressjs.com/en/guide/routing.html
    // TODO Create get method API
    const username = req.params.username
    userController.get(username, (err, res) => {
      let respObj
      if(err) {
        respObj = {
          status: "error",
          msg: err.message
        }
        return resp.status(400).json(respObj)
      }
      respObj = {
        status: "success",
        msg: res
      }
      resp.status(200).json(respObj)
    })
  })
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 2345444 (fix:file placement correction and fix code)
=======


>>>>>>> fb0811a (feat&fix:fixed userapi files + start implementing kubernetes)
  
module.exports = userRouter