const express=require('express');
const router=express.Router();
const verifyToken=require('../middleware/verifyToken');
const getUserProfile=require('../controllers/userController')
// const Student = require('../models/Student');
// const Teacher=require('../models/Teacher');

const User=require('../models/User');
router.get('/profile',verifyToken ,getUserProfile);

module.exports=router;
