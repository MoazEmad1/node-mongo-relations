const express=require('express');
const router=express.Router();
const verifyToken=require('../middleware/verifyToken');
// const Student = require('../models/Student');
// const Teacher=require('../models/Teacher');
const User=require('../models/User');
router.get('/profile', verifyToken , async (req,res)=>{
    try{
        let user;
        console.log(req.user.role)
        console.log(req.user.email)
        if(req.user.role==='student'){
            user= await User.findOne({email:req.user.email}).populate('teachers');
        }else if(req.user.role==='teacher'){
            user=await User.findOne({email:req.user.email}).populate('students');
        }
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
})
module.exports=router;