const { Schema, model } = require('mongoose');

const CartSchema =  Schema({
    user:{
        type: Schema.Types.ObjectId, 
        ref: 'User',
        unique: true
    },
    products: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Product' 
    }],
});

module.exports = model('Cart', CartSchema);