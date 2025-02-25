const express=require('express');
const router=express.Router();
const verifyToken=require('../middleware/verifyToken');
const {getUserProfile}=require('../controllers/userController');

router.get('/profile',verifyToken,getUserProfile);

module.exports=router;
