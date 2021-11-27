const { response } = require('express');
const { ValidateFields } = require('../helpers/ValidateFields');
const Product = require('../models/Product');

const getProduct = async(req, res = response) => {

    const { name_product, id_product } = req.body;

    try {

        let result = null;

        if(ValidateFields(id_product)){
            result = await Product.findOne({ _id: id_product });
        }
        else if(ValidateFields(name_product)){
            result = await Product.findOne({ name_product });
        } 
        else {
            console.log('[Server] Request failed(getProduct). We not have enough information.')
            return res.status(500).json({
                status: false,
                msg: 'We not have enough information to continue the process. Please send us one of the fields required id_product or name_product.'
            });
        }

        res.status(201).json({
            status: true,
            result
        });

    } catch (error) {
        console.log('[Server] Something wrong: the database are off o we dont have nothing to return')
        return res.status(500).json({
            status: false,
            msg: 'Something wrong: the database are off o we dont have nothing to return'
        })
    }
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

    res.status(201).json({
        status: true,
        PRODUCT_TO_SAVE
    });

}

module.exports = {
    getProduct,
    setProduct
}