const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const request= require('request');
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
  // var bodyReq = req.body;
  // var bodyRes = res.body;
  //console.log(bodyReq);

  //res.send(bodyReq);
  //console.log(bodyReq+"\n"+bodyRes);
  delete req.headers.host;
  var body={
    url: 'https://github.com/login/oauth/access_token',
    headers: req.headers,
    body: req.body
  }
  //console.log(body.toString());
  request(body.toString(), (err, remoteResponse, remoteBody)=>{
    console.log(remoteResponse);
    console.log(remoteBody);
    if(err) { return  res.status(500).end('Error'); }

    // res.send("Text");
    res.end(remoteBody);
    console.log(remoteBody);
  });
  //res.send("Hi");
})

module.exports = router;
