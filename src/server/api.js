const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//Connect
const connection = (closure)=> {
  return MongoClient.connect('mongodb://localhost:27017/', (err, db)=>{
    if(err) return console.log(err);

    closure(db);
  })
};
