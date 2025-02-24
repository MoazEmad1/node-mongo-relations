const mongoose=require('mongoose');
const User=require('./User');

const teacherSchema=new mongoose.Schema({
    subject:{type:String, required:true},
    students:[{type: mongoose.Schema.Types.ObjectId, ref:'User'}]
});

module.exports=User.discriminator('Teacher', teacherSchema);