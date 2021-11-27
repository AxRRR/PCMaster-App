const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { GenerateJWT } = require('../helpers/GenerateJwt');
const { ValidateFields } = require('../helpers/ValidateFields');
const Cart = require('../models/Cart');

const CreateUser = async(req, res = response) => {
    const { name_user, password } = req.body;

    try {
        let user = await User.findOne({ name_user });
        if(user){
            return res.status(400).json({
                status: false,
                response: 'Username already exist'
            });
        }

        user = new User(req.body);
        console.log(user)
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        
        
        // If the user has a cart with products, will push the items in the array cart
        if(ValidateFields(req.body.cart_items)){
            const { _id } = user;
            userExist = Cart.findOne({ user: _id });

            if(userExist){
                
            }

            let cartCreate = new Cart({
                user: _id
            });
            
            for (let i = 0; i < req.body.cart_items.length; i++) {
                cartCreate.products.push(req.body.cart_items[i]);
            }

            cartCreate.save();
        } 

        await user.save();
        const tokenAccess = await GenerateJWT(user.id, user.name_user)

        res.status(201).json({
            status: true,
            msg: 'The account has been registed succesfully.',
            tokenAccess,
            data:{
                id: user.id,
                name: user.name_user,
            }
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: false,
            response: 'Error detected: API failure.'
        });
    }
}

const LoginUser = async(req, res = response) => {
    const { name_user, password } = req.body;

    try {
        
        const user = await User.findOne({ name_user });

        if(!user){
            return res.status(400).json({
                status: false,
                message: 'Error: Username does not exist in the database'
            })
        }

        const ValidPassword = bcrypt.compareSync(password, user.password);

        if(!ValidPassword){
            return res.status(400).json({
                status: false,
                message: 'Error: Username or password incorrect'
            })
        }

        const tokenAccess = await GenerateJWT(user.id, user.name);

        res.status(201).json({
            status: true,
            msg: 'Authentication has been successfully.',
            tokenAccess,
            data:{
                id: user.id,
                name: user.name_user,
            }
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'Error: API failure'
        });
    }
}

const newAccessToken = async (req, res = response ) => {

    const { id, name } = req;

    const tokenAccess = await GenerateJWT(id, name);

    res.json({
        response: true,
        tokenAccess
    })
}

module.exports = {
    CreateUser,
    LoginUser,
    newAccessToken
}