const Class=require('../models/Class');

const createClass=async(name, teacherId)=>{
    const newClass=new Class({name, teacher:teacherId });
    await newClass.save();
    return newClass;
};

const addStudent=async(classId, studentId)=>{
    const classObj =await Class.findById(classId);
    if (!classObj) throw new Error('Class not found');
    classObj.students.push(studentId);
    await classObj.save();
    return { message:'Student added successfully'};
};

const getClassById=async(classId)=>{
    return await Class.findById(classId).populate('teacher').populate('students');
};

const deleteClass=async(classId)=>{
    const classObj=await Class.findByIdAndDelete(classId);
    if (!classObj) throw new Error('Class not found');
    return {message:'Class deleted successfully'};
};

module.exports={createClass,addStudent,getClassById,deleteClass};
