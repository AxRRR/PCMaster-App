const { Router } = require("express");
const { check } = require("express-validator");
const { getProducts, setProduct } = require("../controllers/products");
const { CheckFields } = require("../middlewares/CheckFields");


const router = Router();

router.post('/products', [
    check('category', 'The category is required').not().isEmpty(),
    CheckFields
    ],
    getProducts
);

router.post('/insert_product', [
    check('category_product', 'The category is required').not().isEmpty(),
    CheckFields
    ],
    setProduct
);

module.exports = router;