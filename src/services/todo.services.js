const Sequelize = require('sequelize');
const models = require('../../models');
const todo = async () => {
  //     console.log('hi')
  //     const tasks = await models.items.findAll({
  //        include: { model: models.subtasks }
  //     });
  // return tasks
  const tasks=await models.users.findAll({
    include:{model:models.items}
  })
  return tasks
};
module.exports = {
  todo
};
