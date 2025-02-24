// const express=require('express');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const secret=process.env.JWT_SECRET

function verifyToken(req,res,next){
    const token=req.header('Authorization')
    if (!token) return res.status(401).json({ message: 'Access Denied' });
    try{
        const decoded=jwt.verify(token, secret);
        req.user=decoded;
        next();

    }catch(err){
        res.status(400).json({ message: 'Invalid Token' });
    }
}

module.exports=verifyToken