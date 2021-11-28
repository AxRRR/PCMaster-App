const { response } = require('express');
const Cart = require('../models/Cart');
const User = require('../models/User');

const getCart = async(req, res = response) => {
    const { name_user } = req.body;

    try {
        
        let cartByUser = await User.findOne({ name_user });
        if(!cartByUser){
            return res.status(500).json({
                status: false,
                msg: 'The user does not exist in the database'
            });
        }

        const { _id } = cartByUser;
        cartPopulate = await Cart.findOne({ user: _id }).populate('products');

        res.status(291).json({
            status: true,
            name_user,
            cartPopulate
        })

    } catch (error) {
        console.log('[Server] Cart-Request | Something wrong: the database are off o we dont have nothing to return')
        return res.status(500).json({
            status: false,
            msg: 'Something wrong: the database are off o we dont have nothing to return'
        })
    }
}

const updateCart = async(req, res = response) => {
    const { name_user, update_cart } = req.body;
    
    try {
        let nextArray = [];
        
        let updateCart = await User.findOne({ name_user });
        
        if(!updateCart){
            return res.status(500).json({
                status: false,
                msg: 'The username is not existe'
            })
        }
        
        let cartUpdated = await Cart.findOne({ user: updateCart._id });
        
        for (let i = 0; i < update_cart.length; i++) {
            nextArray.push(update_cart[i])
        }
        
        cartUpdated.products = nextArray;
        await cartUpdated.save();

        res.status(201).json({
            status: true,
            msg: 'The cart of this user has been updated'
        });
        
    } catch (error) {
        console.log('[Server] Cart-Request | Something wrong: the database are off o we dont have nothing to return')
        return res.status(500).json({
            status: false,
            msg: 'Something wrong: the database are off o we dont have nothing to return'
        })
    }
}

const clearCart = async(req, res = response) => {
    const { name_user } = req.body;

    try {
        
        let process = await User.findOne({ name_user });
        
        if(!process){
            return res.status(500).json({
                status: false,
                msg: 'The username is not existe'
            })
        }
        
        process = await Cart.findOne({ user: process._id });
        process.products = [];
        process.save();
        
        res.status(201).json({
            status: true,
            msg: 'The cart of this user has been cleaned'
        });

    } catch (error) {
        console.log('[Server] Cart-Request | Something wrong: the database are off o we dont have nothing to return')
        return res.status(500).json({
            status: false,
            msg: 'Something wrong: the database are off o we dont have nothing to return'
        })
    }
}

module.exports = {
    getCart,
    clearCart,
    updateCart
}