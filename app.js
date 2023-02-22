const express = require('express');
const cors = require('cors');
const app = express();

const conn = require('./db/conn');
conn();


app.use(cors());
app.use(express.json());

const routes = require('./routes/routes');
app.use('/api', routes);

app.listen(3000, () => {
    console.log("Servidor Online");
})