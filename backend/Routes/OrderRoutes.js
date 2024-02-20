const express = require('express');
const { createOrder, getSingleOrder, getAllOrder, myOrders, deleteOrder } = require('../Controller/OrderController');
const { isAuthenticateUser } = require('../Middleware/Auth');
const router = express.Router();


router.post('/order/new'  , isAuthenticateUser , createOrder)

router.get('/order/:id'  , isAuthenticateUser , getSingleOrder)

router.get('/admin/order'  , isAuthenticateUser , getAllOrder)

router.get('/orders/me'  , isAuthenticateUser , myOrders)

// router.put('/admin/order/:id' , isAuthenticateUser )             === ye nhi bnaya abhi 


router.delete('/admin/order/:id' , isAuthenticateUser , deleteOrder)

module.exports = router