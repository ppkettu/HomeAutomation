const express = require("express");
const mongoose = require("mongoose");
const haItem = require("../models/items");
const SmartHomeHome = require('./smaHome');

let router = express.Router();

router.get("/items", function(req,res) {
    return (new SmartHomeHome).getList(req,res);
})

/*router.get("/items", function(req,res) {
    haItem.find(function(err, items) {
        if(err) {
            return res.status(404).json({"message":"list not found"})
        }
        if(!items) { // sanity check
            return res.status(404).json({"message":"list not found"})
        }
        return res.status(200).json(items);
    })
})*/

router.post("/items", function(req,res) {
    let item = new haItem({
        name:req.body.name,
        id:req.body.id,
        type:req.body.type
    });
    item.save(function(err) {
        if(err) {
            return res.status(409).json({"message":"item not saved"})
        }
        return res.status(200).json({"message":"success"});
    })
});

router.get("/item/:id", function(req,res) {
    return (new SmartHomeHome).load(req,res) 
})

router.delete("/items/:id", function(req,res) {
    console.log("delete:"+req.params.id);
    haItem.deleteOne({"_id":req.params.id}, function(err) {
        if(err) {
            return res.status(404).json({"message":"not found"});
        }
        return res.status(200).json({"message":"success"})
    })
});

module.exports = router;
