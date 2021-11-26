const { response } = require('express');
const Product = require('../models/Product');

const getProducts = async(req, res = response) => {
    // console.log(req.body)
}

const setProduct = async(req, res = response) => {

    const {
        name_product,
        price_product,
        description_product,
        category_product,
        subcategory_product,
        imagen_product,
        total_sell
    } = req.body;

    console.log(req.body)

   let PRODUCT_TO_SAVE = new Product({
        name_product,
        price_product,
        description_product,
        category_product,
        subcategory_product,
        imagen_product,
        total_sell
    });

    await PRODUCT_TO_SAVE.save();
}

module.exports = {
    getProducts,
    setProduct
}