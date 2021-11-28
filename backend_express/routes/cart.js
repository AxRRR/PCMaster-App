const { Router } = require('express');
const { check } = require('express-validator');
const { CheckFields } = require('../middlewares/CheckFields');
const { getCart, updateCart, clearCart } = require('../controllers/cart');


const router = Router();

router.get('/getCart', [
        check('name_user', 'The user name is empty').not().isEmpty(),
        CheckFields
    ],
    getCart
);

router.post('/updateCart', [
        check('name_user', 'The user name is empty').not().isEmpty(),
        check('update_cart', 'The new list is empty').not().isEmpty(),
        CheckFields
    ],
    updateCart
);

router.post('/clearCart', [
        check('name_user', 'Please send the username to get process').not().isEmpty(),
        CheckFields
    ],
    clearCart
);

// router.post('/login', [
//     check('name_user', 'Username or password incorrect').not().isEmpty(),
//     check('password', 'Username or password incorrect').not().isEmpty(),
//     CheckFields
// ],
//     LoginUser
// );

module.exports = router;