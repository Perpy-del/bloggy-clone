const express = require('express');
const router = express.Router();
const database = require('../config/database');
const dotenv = require('dotenv');

dotenv.config();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const db = await database;

    const results = await db.collection(process.env.DB_NAME).find({}).toArray();
    res.json(results)
  } catch (error) {
    console.log('Error retrieving databas: ', error);

    res.status(500).json({error: 'Internal Server Error'});
  }
});

module.exports = router;
