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
