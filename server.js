const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
var db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const multer = require('multer');
const upload = multer({dest: './upload'})

app.get('/api/customers', (req, res) => {
    db.query(
      "SELECT * FROM customers",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
});

app.use('/image', express.static('./upload'));
app.post('/api/customers', upload.single('image'),(req, res) => {
  let sql = 'INSERT INTO CUSTOMERS VALUES (null, ?, ?, ?, ?, ?)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  db.query(sql, params, 
    (err, rows, fields) => {
        res.send(rows);
    }
  )
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))

