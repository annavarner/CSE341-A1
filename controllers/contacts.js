const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('contacts').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  console.log(req.params.id);
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('contacts')
    .collection('contacts')
    .findOne({ '_id': userId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  };


module.exports = { getAll, getSingle };