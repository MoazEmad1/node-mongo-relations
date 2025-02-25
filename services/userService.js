const User=require('../models/User');

const getUserProfile=async(user)=>{
    if(req.user.role==='student'){
        return await User.findOne({email:user.email}).populate('teachers').select('-password');
    }else if(req.user.role==='teacher'){
        return await User.findOne({email:user.email}).populate('students').select('-password');
    }
    return null;
};

module.exports={getUserProfile};
