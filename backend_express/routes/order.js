const { Router } = require('express');
const { check } = require('express-validator');
const { CheckFields } = require('../middlewares/CheckFields');
const { setOrder, getOrders } = require('../controllers/orders');


const router = Router();

router.post('/setOrder', [
        check('user', 'The user name is empty').not().isEmpty(),
        CheckFields
    ],
    setOrder
);

router.get('/getOrders', [
        check('name_user', 'The user name is empty').not().isEmpty(),
        CheckFields
    ],
    getOrders
);

module.exports = router;