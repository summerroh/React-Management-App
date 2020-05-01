const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id': 1,
        'image': 'http://placeimg.com/64/64/any/1',
        'name':"노선경",
        'birthday':"950211",
        'gender':"여자",
        'job':"디자이너"
      },
      {
        'id': 2,
        'image': 'http://placeimg.com/64/64/any/2',
        'name':"마틴시",
        'birthday':"920101",
        'gender':"남자",
        'job':"음악가"
      },
      {
        'id': 3,
        'image': 'http://placeimg.com/64/64/any/3',
        'name':"무무얌",
        'birthday':"970512",
        'gender':"여자",
        'job':"개발자"
      }
      ]);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))