const { Schema, model } = require('mongoose');

const ProductSchema =  Schema({
    name_product:{
        type: String
    },
    price_product:{
        type: Number
    },
    description_product:{
        type: String
    },
    category_product:{
        type: String
    },
    subcategory_product:{
        type: String
    },
    imagen_product: {
        type: String
    },
    total_sell:{
        type: Number
    }
});

module.exports = model('Product', ProductSchema);