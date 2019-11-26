const express = require('express');

const bodyParser = require('body-parser');
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const Events = require('./models/events');
router.get('/events',(req,res,next) =>{
    // res.send('Retireve events list');
    Events.find(function(err,events){
        res.json(events);
    })
});

//add events
router.post('/event',urlencodedParser,(req,res,next) =>{
    console.log(req)
    let newEvent = new Events({
        name:req.body.name,
        date:req.body.date,
        location:req.body.location

    });

    newEvent.save((err,event)=>{
        if(err){
            res.json({msg:err});

        }else{
            res.json({msg:'Added event'}); 
        }
    })
})

//delete events
router.delete('/event/:id',(req,res,next) =>{
//mondo create id for each event , so we will use id for delete
    Events.remove({_id:req.params.id}, function(err,result){
        if(err){
            res.json(err);
                }else{
                    res.json(result);
                }
    })
})


module.exports = router;