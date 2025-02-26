const classService=require('../services/classService');

const createClass=async(req,res)=>{
    try {
        // if (req.user.role!=='Teacher')return res.status(403).json({message:'Only teachers can create classes'});
        const result=await classService.createClass(req.body.name, req.user.userId);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addStudentToClass=async(req, res)=>{
    try {
        // if (req.user.role!=='Teacher')return res.status(403).json({message: 'Only teachers can add students' });
        const result=await classService.addStudent(req.params.classId, req.body.studentId);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getClassDetails=async(req, res)=>{
    try {
        const result=await classService.getClassById(req.params.classId);
        if (!result)return res.status(404).json({message:'Class not found'});
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteClass=async(req, res)=>{
    try {
        // if (req.user.role !== 'Teacher')return res.status(403).json({message:'Only teachers can delete classes'});

        const result=await classService.deleteClass(req.params.classId);
        res.json(result);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports={createClass,addStudentToClass,getClassDetails,deleteClass};
