const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const Class = require('../models/Class');
// const Teacher = require('../models/Teacher');
// const Student = require('../models/Student');

router.post('/create',verifyToken,async(req,res) => {
    try{
        if (req.user.role !== 'teacher')return res.status(403).json({message:'Only teachers can add classes'});
        const { name }=req.body;
        console.log(req.user.userId);
        const newClass=new Class({ name, teacher: req.user.userId });
        await newClass.save();
        res.status(201).json(newClass);
    }catch(err){
        res.status(500).json({error:'Error adding class'});
    }
});

router.post('/:classId/add-student',verifyToken, async (req,res) => {
    try{
        if (req.user.role!=='teacher')return res.status(403).json({message:'Only teachers can add students'});
        const{studentId}=req.body;
        const classObj =await Class.findById(req.params.classId);
        if (!classObj)return res.status(404).json({message:'Class not found'});
        classObj.students.push(studentId);
        await classObj.save();
        res.json({message:'Student added successfully'});
    }catch(err){
        res.status(500).json({error:'Error adding student'});
    }
});

router.get('/:classId',verifyToken,async(req,res) => {
    try{
        const classObj=await Class.findById(req.params.classId).populate('teacher').populate('students');
        if (!classObj)return res.status(404).json({ message:'Class not found'});

        res.json(classObj);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Error fetching class'});
    }
});

module.exports = router;
