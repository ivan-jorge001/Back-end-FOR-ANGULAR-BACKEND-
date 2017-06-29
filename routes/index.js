const express = require('express');
const router = express.Router();
const Phone = require('../models/phone-model');
const mongoose = require('mongoose');

/* GET home page. */
router.get('/phones', (req, res, next) => {
  Phone.find((err, phonesList) => {
    if (err) {
      res.json(err);
      return;
    }


    res.json(phonesList);
  });
});

router.post('/phones', (req, res, next) => {
  console.log(req.body+'ssssssssssssssssssssssssssss');

  const thePhone = new Phone({
    brand: req.body.brand,
    name: req.body.name,
    specs: req.body.specs,
    image: req.body.image || ''
  });
  thePhone.save((err) => {
    if (err) {
      console.log('aaaaaaaaaaaaaaaaaaaa'+'ssssssssssssssssssssssssssss');

      res.json(err);
      return;
    }
    res.json({
      message: 'New Phone Created',
      id: thePhone._id
    });
  });
});



router.get('/phone/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Phone.findById(req.params.id, (err, thePhone) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(thePhone);
    });
});

/* EDIT a Phone. */
router.put('/phones/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const updates = {
    brand: req.body.brand,
    name: req.body.name,
    specs: req.body.specs,
    image: req.body.image
  };

  Phone.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: 'Phone updated successfully'
    });
  });
});

/* DELETE a Phone. */
router.delete('/phones/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Phone.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    return res.json({
      message: 'Phone has been removed!'
    });
  });
});

module.exports = router;
