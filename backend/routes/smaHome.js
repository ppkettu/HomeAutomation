//const mongoose = require("mongoose");

const SmartHomeRoot = require('./smaRoot');
const houseModel = require("../models/items");

class SmartHomeHome extends SmartHomeRoot {
    constructor(id) {
        super(id);
        
        this.model = houseModel
    }
    _load(self,item) {
        this.collectionName = 'home';
    }
    load(req,res) {
        let item = super.load(req,res);
        //return item;
        //return res.status(200).json(item);
    }
    getChildren (req,res) {
        
    }
}

module.exports = SmartHomeHome;
