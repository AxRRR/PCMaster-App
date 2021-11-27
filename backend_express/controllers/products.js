const { response } = require('express');
const { ValidateFields } = require('../helpers/ValidateFields');
const Category = require('../models/Category');
const Product = require('../models/Product');

const getProduct = async(req, res = response) => {

    const { name_product, id_product } = req.body;

    try {

        let result = null;

        if(ValidateFields(id_product)){
            result = await Product.find({ _id: id_product });
        }
        else if(ValidateFields(name_product)){
            result = await Product.find({ name_product });
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

const getProductByCategory = async(req, res = response) => {

    const { category } = req.body;

    console.log(category)
    try {

        let result = await Category.findOne({ name_category: category }).populate('products')

        if(!result){
            return res.status(500).json({
                status: false,
                msg: 'The category does not exist.'
            })
        }

        res.status(201).json({
            status: true,
            result
        })
        
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

    try {

        let dataProduct = new Product({
            name_product,
            price_product,
            description_product,
            category_product,
            subcategory_product,
            imagen_product,
            total_sell
        });
        await dataProduct.save();
        
        const category = await Category.findOne({ name_category: category_product });

        if(!category){
            return res.status(500).json({
                status: false,
                msg: 'The Category does not exist. Please write again the Category correctly.'
            });
        }
        category.products.push(dataProduct._id);
        category.save();

        // Print in the console the new product details
        console.log({
            '[Server] A new product has be inserted:':{
                dataProduct
            }
        })

        res.status(201).json({
            status: true,
            msg: 'The new product insertion has be sucessfuly.'
        });
        
    } catch (error) {
        console.log('[Server] Something wrong: the database are off o we dont have nothing to return')
        return res.status(500).json({
            status: false,
            msg: 'Something wrong: the database are off o we dont have nothing to return'
        })
    }

}

module.exports = {
    getProduct,
    setProduct,
    getProductByCategory
}