const express = require('express');
const { todoRouter } = require('./routes/todo.routes');


const port = 3000;
const app = express();

app.use('/todo', todoRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/todo`);
});
