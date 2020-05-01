const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
var db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/api/customers', (req, res) => {
    db.query(
      "SELECT * FROM customers",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
    // res.send("HI");
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))

