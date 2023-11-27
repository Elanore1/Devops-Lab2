const express = require('express');
const userController = require('../controllers/user');

const userRouter = express.Router();

userRouter
  .post('/', (req, resp) => {
    userController.create(req.body, (err, res) => {
      let respObj;
      if (err) {
        respObj = {
          status: "error",
          msg: err.message
        };
        return resp.status(400).json(respObj);
      }
      respObj = {
        status: "success",
        msg: res
      };
      resp.status(201).json(respObj);
    });
  })
<<<<<<< HEAD
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
  
module.exports = userRouter
=======
  .get('/:username', (req, resp) => {
    const username = req.params.username;

    userController.getUserByUsername(username, (err, user) => {
      let respObj;
      if (err) {
        respObj = {
          status: "error",
          msg: err.message
        };
        return resp.status(500).json(respObj); // Internal Server Error
      }

      if (!user) {
        respObj = {
          status: "error",
          msg: "User not found"
        };
        return resp.status(404).json(respObj); // Not Found
      }

      respObj = {
        status: "success",
        user
      };
      resp.status(200).json(respObj);
    });
  });

module.exports = userRouter;
>>>>>>> e60bfb7 (fix:vagrant,docker,userapi)
