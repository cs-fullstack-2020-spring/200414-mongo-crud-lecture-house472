let express = require('express');
let router = express.Router();
router.use(express.json());
//import mongoose model and assign to variable
let EntryCollection =  require('../models/EntrySchema');

//get all
router.get('/', (req, res)=>{
    // res.send("Get all method worked")
    //use empty {} to represent get all
    EntryCollection.find({}, (errors, results)=>{
        errors ? res.send(errors) : res.send(results)
    })
});
//get by ID
router.get('/:title', (req, res)=>{
    // res.send("Get by title worked")
    EntryCollection.findOne({entryTitle: req.params.title},(errors, results)=>{
        errors ? res.send(errors) : res.send(results)
    }) 
});

//Create method
router.post('/' ,(req, res)=>{
    // res.send("Post method worked")
    //sanity
    EntryCollection.create(req.body, (errors, results)=>{
        errors ? res.send(errors) : res.send(results);
    });
    // res.send(req.body)
});
//Update
router.put('/:title' ,(req, res)=>{
    // res.send("Put method worked")
    EntryCollection.findOneAndUpdate({entryTitle:req.params.title}, req.body, (errors, results)=>{
        errors ? res.send(errors) : res.send(results);});
});

router.delete('/:title' ,(req, res)=>{
    // res.send("Delete method worked")
    EntryCollection.findOneAndDelete({entryTitle:req.params.title}, (errors, results)=> 
        errors ? res.send(errors) : res.send(`${req.params.title} was deleted`));
        
});





module.exports=router;