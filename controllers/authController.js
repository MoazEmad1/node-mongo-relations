const authService=require('../services/authService');

const register=async(req, res)=>{
    try{
        const result=await authService.registerUser(req.body);
        res.status(201).json(result);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const login=async(req, res)=>{
    try{
        const result=await authService.loginUser(req.body);
        res.status(200).json(result);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

module.exports={ register, login };
