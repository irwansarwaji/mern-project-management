const express = require('express');
const router = express.Router();

//Item Model for queries
//  ../ -> outside the api and routes folder
const Item = require('../../models/Item');

//@route GET api/items
//@desc Get all items
//@access Public
// -1 is sort desc.
router.get('/', (req, res) =>{
   Item.find().sort({date: -1})
       .then(items => res.json(items))
});

//@route POST api/items
//@desc Create a item
//@access Public
router.post('/', (req, res) =>{
   const newItem = new Item({
       name: req.body.name,
       description: req.body.description
   });

   newItem.save().then(item => res.json(item)); //save it do the database
});

//@route DELETE api/items/:id
//@desc Delete a item
//@access Public
router.delete('/:id', (req, res) =>{
    //find item
    Item.findById(req.params.id)
        .then(item => item.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
