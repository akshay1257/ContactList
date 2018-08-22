var express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');


//Retrieve contacts
router.get('/contacts', (req,res,next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
   });

//Add  contacts
router.post('/contact', (req,res,next)=>{
    //Logic to add
    let newContact = new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=> {
        if(err){
            res.json({msg: 'Failed to sssddadd contact'});
        }
        else{
            res.json({msg: 'Contact added asuccesfully'});
        }
    })
});

//delete contacts
router.delete('/contact/:id',(req,res,next)=>{
 
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
} );

//delete contacts
router.delete('/contacts:id', (req,res,next)=>{
    //Logic to delete
});
module.exports = router;