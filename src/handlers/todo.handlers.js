const services = require('../services/todo.services');

const todo = async (req, res) => {
  try {
    const subTasks = await services.todo();
    res.json({
        subTasks,
    }).status(200);
  } catch (err) {
    res.status(500).json({ error: `There's something wrong!  Failed: \n Error: ${err.message}` });
  }
};
module.exports = {
  todo
};
