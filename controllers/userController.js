const User=require('../models/User');

const getUserProfile=async(req, res)=>{
    try{
        let user;
        if(req.user.role==='student'){
            user= await User.findOne({email:req.user.email}).populate('teachers');
        }else if(req.user.role==='teacher'){
            user=await User.findOne({email:req.user.email}).populate('students');
        }
        if (!user)return res.status(404).json({message:'User not found'});
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports=getUserProfile
