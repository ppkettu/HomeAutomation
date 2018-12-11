

class SmartHomeRoot {
    constructor(id) {
        //if(name === undefined) name = '';
        //if(id === undefined) id = '';
        //if(type === undefined) type = -1;
        this.name = undefined;
        this.id = id;
        this.type = -1;
        this.collectionName = undefined;
        this.children = [];
        this.model = undefined;
    }
    getList(req,res) {
        this.model.find(function(err,items) {
            if(err) {
                return res.status(404).json({"message":"list not found"})
            }
            if(!items) { // sanity check
                return res.status(404).json({"message":"list not found"})
            }
            return res.status(200).json(items);
        })
    }
    _load(self,item) {

    }
    load(req,res) {
        let self = this;
        this.model.findOne({"id":req.params.id}, function(err,items) {
            if(err || !items) {
                return res.status(404).json({"message":"item not found"});
                //return null;
            }
            self.name = items.name;
            self.id = items.id;
            self.type = items.type;
            self._load(self,items)

            
            return res.status(200).json(items);
        })
    }
    getChildren (req,res) {
    }
}

module.exports = SmartHomeRoot;

/*SmartHomeRoot.prototype.getChildren = function() {
    var self = this;
    return this.children;
}*/
