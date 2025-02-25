const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/User');
const Student=require('../models/Student');
const Teacher=require('../models/Teacher');
require('dotenv').config();
const secret=process.env.JWT_SECRET


const registerUser=async({name, email, password, role, subject })=>{
    let user=await User.findOne({email});
    if (user) return res.status(400).json({message:'User already exists'});

    const hashedPass= await bcrypt.hash(password,10);
    if(role==='student'){
        user=new Student({name,email,password:hashedPass,role});
    }else if(role==='teacher'){
        user =new Teacher({name,email,password:hashedPass,role, subject});
    }else{
        return res.status(400).json({error:'Invalid Role'});
    }
    await user.save();
    res.status(201).json({message:`${role} registered successfully`});
};

const loginUser=async({email,password})=>{
    const user=await User.findOne({email});
    if (!user) return res.status(400).json({message:'Invalid email or password' });
    const validPass=await bcrypt.compare(password,user.password);
    if (!validPass) return res.status(400).json({message:'Invalid email or password'});
    const token=jwt.sign({userId:user._id, email:user.email,role:user.role},secret,{expiresIn:'1h'});

    return { token, role: user.role };
};

module.exports={ registerUser, loginUser };
