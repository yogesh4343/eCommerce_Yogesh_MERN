const express = require('express');
const { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct, updateReview, deleteReview, getAllReview } = require('../Controller/ProductController');
const { isAuthenticateUser, authorizeRole } = require('../Middleware/Auth');

const router = express.Router();


router.get("/products" ,  getAllProducts)
router.get("/product/:id" ,  getSingleProduct)

router.post("/admin/product/new" , isAuthenticateUser,  createProduct)

router.put("/admin/product/:id" , isAuthenticateUser,  updateProduct)
router.delete("/admin/product/:id" , isAuthenticateUser, deleteProduct  )


router.get("/review"  , getAllReview )
router.put("/reviews" , isAuthenticateUser , updateReview )              // update & creat
router.delete("/reviews" , isAuthenticateUser , deleteReview )



module.exports = router