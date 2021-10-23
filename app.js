require('dotenv').config();
const chalk = require('chalk');
const express = require('express');
const cors = require('cors');

require('./driver/mongo-connection');

const usersRouter = require('./routes/users-routes');

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

// routes // controllers // models

app.use('/api/users', usersRouter);



app.listen(port, function () {
  console.log(chalk.green(`El servidor está listo en el puerto: ${port}!`));
}); // 3000 // 0000~25000

