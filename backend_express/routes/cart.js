const { Router } = require('express');
const { check } = require('express-validator');
const { CheckFields } = require('../middlewares/CheckFields');
const { getCart } = require('../controllers/cart');


const router = Router();

router.get('/getCart', [
        check('name_user', 'The user name is empty').not().isEmpty(),
        CheckFields
    ],
    getCart
);

// router.post('/login', [
//     check('name_user', 'Username or password incorrect').not().isEmpty(),
//     check('password', 'Username or password incorrect').not().isEmpty(),
//     CheckFields
// ],
//     LoginUser
// );

module.exports = router;