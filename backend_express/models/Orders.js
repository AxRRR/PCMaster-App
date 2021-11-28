const { Schema, model } = require('mongoose');

const OrderSchema =  Schema({
    user:{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    products: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Product' 
    }],
    date_order:{
        type: Date
    },
    delivered_order:{
        type: Boolean
    },
    total_order:{
        type: Number
    }

});

module.exports = model('Order', OrderSchema);