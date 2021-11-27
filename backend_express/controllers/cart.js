const { response } = require('express');
const Cart = require('../models/Cart');
const User = require('../models/User');

const getCart = async(req, res = response) => {
    const { name_user } = req.body;

    try {
        
        let cartByUser = await User.findOne({ name_user });
        if(!cartByUser){
            res.status(500).json({
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
        console.log('[Server] Cart-Request: Something wrong: the database are off o we dont have nothing to return')
        return res.status(500).json({
            status: false,
            msg: 'Something wrong: the database are off o we dont have nothing to return'
        })
    }
}

const deleteCartRow = async(req, res = response) => {

}

const clearCart = async(req, res = response) => {

}

const updateCart = async(req, res = response) => {

}

module.exports = {
    getCart,
    deleteCartRow,
    clearCart,
    updateCart
}