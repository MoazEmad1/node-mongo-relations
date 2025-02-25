const User=require('../models/User');

const getUserProfile=async(user)=>{
    if(user.role==='Student'){
        return await User.findOne({email:user.email}).populate('teachers').select('-password');
    }else if(user.role==='Teacher'){
        return await User.findOne({email:user.email}).populate('students').select('-password');
    }
    return null;
};

module.exports={getUserProfile};
