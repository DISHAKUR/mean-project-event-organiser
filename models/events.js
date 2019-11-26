const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }

});

const Events = module.exports = mongoose.model('Events', EventsSchema);
