const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true });

var conn = mongoose.Collection;
var customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        index: {
            unique: true,
        },
    },
});
var customerModel = mongoose.model('customer', customerSchema);
module.exports = customerModel;