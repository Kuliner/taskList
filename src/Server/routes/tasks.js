const express = require('express');
const passport = require('passport');
const ObjectId = require('mongodb').ObjectID;

const router = express.Router();

/* GET tasks listing. */
router.get('/',
  passport.authenticate('local'),
  (req, res) => {
    res.send('respond with a resource');
  });

router.get('/byId/:id',
  passport.authenticate('local'),
  async (req, res) => {
    const { id } = req.params;
    const { dbService } = res;
    const Tasks = dbService.taskCollection();
    const task = await Tasks.findOne({ _id: ObjectId(id) });

    res.status(200).send(task);
  });

router.get('/byLogin/:name',
  passport.authenticate('local'),
  async (req, res) => {
    const { name } = req.params;
    const { dbService } = res;
    const Tasks = dbService.taskCollection();
    const task = await Tasks.findOne({ name });

    res.status(200).send(task);
  });

router.post('/',
  passport.authenticate('local'),
  async (req, res) => {
    const { name, description, due } = req.body;
    const { dbService } = res;
    const Tasks = dbService.taskCollection();

    const status = await Tasks.insertOne({ name, description, due });
    if (status.insertedCount > 0) res.status(200);
    else res.status(500);
  });

module.exports = router;
