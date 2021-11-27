const { Schema, model } = require('mongoose');

const CategorySchema =  Schema({
    name_category:{
        type: String
    },
    products: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Product' 
    }],
    total_items:{
        type: Number
    }
});

module.exports = model('Category', CategorySchema);