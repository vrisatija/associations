const express = require('express');
const handlers = require('../handlers/todo.handlers');

const todoRouter = express.Router();
todoRouter.get('/getSubTasks', handlers.todo);
module.exports = {
    todoRouter,
};
