const { response } = require('express');
const User = require('../models/User');
const Orders = require('../models/Orders');

const setOrder = async(req, res = response) => {
    const { user, products, total } = req.body;

    try {
        let username = await User.findOne({ name_user: user });
        
        if(!username){
            return res.status(600).json({
                status: false,
                msg: 'The nameuser is does not exist'
            });
        }
        
        let Order = new Orders({
            user: username._id,
        });
        
        Order.products = products;
        Order.date_order = new Date();
        Order.total_order = total;
        Order.save();
        
        res.status(201).json({
            status: true,
            msg: 'The new order has been registered'
        })
        
    } catch (error) {
        console.log('[Server] Order-Request | Something wrong: the database are off o we dont have nothing to return')
        return res.status(500).json({
            status: false,
            msg: 'Something wrong: the database are off o we dont have nothing to return'
        })
    }
}
    
const getOrders = async(req, res = response) => {
    const { name_user } = req.body;
        
        try {
            let username = await User.findOne({ name_user });
            
            if(!username){
                return res.status(500).json({
            status: false,
            msg: 'The username is does not exist.'
            })
        }
        
        let getAllOrders = await Orders.find({ user: username._id });
        if(!getAllOrders.length){
            return res.status(201).json({
                status: true,
                msg: 'This user not has register of orders recently'
            })
        }
        
        res.status(201).json({
            status: true,
            getAllOrders
        });
    } catch (error) {
        console.log('[Server] Order-Request | Something wrong: the database are off o we dont have nothing to return')
        return res.status(500).json({
            status: false,
            msg: 'Something wrong: the database are off o we dont have nothing to return'
        })
    }
}

module.exports = {
    setOrder,
    getOrders
}