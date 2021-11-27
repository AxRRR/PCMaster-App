const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { GenerateJWT } = require('../helpers/GenerateJwt');

const CreateUser = async(req, res = response) => {
    const { name, password } = req.body;

    try {
        let user = await User.findOne({ name_user: name });
        if(user){
            return res.status(400).json({
                status: false,
                response: 'Username already exist'
            });
        }
        
        user = new User(req.body);

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        const tokenAccess = await GenerateJWT(user.id, user.name)

        res.status(201).json({
            status: true,
            id: user.id,
            name: user.name,
            tokenAccess,
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
    const { name, password } = req.body;

    try {
        
        const user = await User.findOne({ name });

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
            id: user.id,
            name: user.name,
            inparty: user.inparty,
            inpartyid: user.inpartyid,
            tokenAccess,
            stats: {
                wins: user.wins,
                losses: user.losses,
                versuswin: user.versuswin,
                grupwin: user.grupwin,
                score: user.score,
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