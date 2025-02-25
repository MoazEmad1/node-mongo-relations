const Class=require('../models/Class');

const createClass=async(name, teacherId)=>{
    const newClass=new Class({name, teacher: req.user.userId });
    await newClass.save();
    return newClass;
};

const addStudent=async(classId, studentId)=>{
    const classObj =await Class.findById(req.params.classId);
    if (!classObj)return res.status(404).json({message:'Class not found'});
    classObj.students.push(studentId);
    await classObj.save();
    return { message:'Student added successfully'};
};

const getClassById=async(classId)=>{
    const classObj=await Class.findById(req.params.classId).populate('teacher').populate('students');
};

const deleteClass=async(classId)=>{
    const classObj=await Class.findByIdAndDelete(req.params.classId);
    if (!classObj)return res.status(404).json({ message:'Class not found'});
    return {message:'Class deleted successfully'};
};

module.exports={createClass,addStudent,getClassById,deleteClass};
