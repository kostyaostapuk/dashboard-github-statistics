const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const request= require('request');
const queryString = require('query-string');
const app = express();

// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/dashboard-github-statistics', (err, db) => {
    if (err) return console.log(err);

    closure(db);
  });
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/users', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((users) => {
        response.data = users;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

// Get token
router.post('/github/token', (req, res, next) => {
  var options={
    url: 'https://github.com/login/oauth/access_token',
    form: req.body
  }
  console.log(options);
  function callback(err, response, body){
    // if(!err && response.status==200){
    //   console.log("hi");
    //   console.log(body);
    // }else {
    //   console.log(err);
    // }
      console.log(body);
      queryString.parse(body);

  }
  request.post(options,callback);
})

module.exports = router;
