require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Routes
app.use(require('./routes/routes'));

//DB
mongoose.connect('mongodb://localhost:27017/BlogAPI',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, (err, res) => {
        if (err) throw err;
        console.log("Conexión realizada correctamente");
    });

app.listen(process.env.PORT, () => {
    console.log(`Server ON puerto ${process.env.PORT}`);
});