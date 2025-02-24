const mongoose=require('mongoose');
const User=require('./User');

const studentSchema=new mongoose.Schema({
    class:{type: mongoose.Schema.Types.ObjectId, ref:'Class'},
    teachers:[{type: mongoose.Schema.Types.ObjectId, ref:'User'}]
})

module.exports=User.discriminator('Student', studentSchema);