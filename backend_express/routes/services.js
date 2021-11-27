const { Router } = require("express");
const { check } = require("express-validator");
const { getProduct, setProduct } = require("../controllers/products");
const { CheckFields } = require("../middlewares/CheckFields");


const router = Router();

router.get('/get_product', 
// [
//     check('name_product', 'The category is required').not().isEmpty(),
//     CheckFields
//     ],
    getProduct
);

router.post('/insert_product', [
    check('category_product', 'The category is required').not().isEmpty(),
    CheckFields
    ],
    setProduct
);

module.exports = router;