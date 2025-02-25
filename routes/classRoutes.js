const express=require('express');
const {createClass,addStudentToClass,getClassDetails,deleteClass}=require('../controllers/classController');
const verifyToken=require('../middleware/verifyToken');
const router=express.Router();

router.post('/create',verifyToken,createClass);
router.post('/:classId/add-student',verifyToken,addStudentToClass);
router.get('/:classId',verifyToken,getClassDetails);
router.delete('/:classId',verifyToken,deleteClass);

module.exports = router;
