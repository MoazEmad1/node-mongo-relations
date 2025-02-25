const express=require('express');
const router=express.Router();
const verifyToken=require('../middleware/verifyToken');
const classController=require('../controllers/classController');

router.post('/create',verifyToken,classController.createClass);
router.post('/:classId/add-student',verifyToken,classController.addStudentToClass);
router.get('/:classId',verifyToken,classController.getClassDetails);
router.delete('/:classId', verifyToken,classController.deleteClass);

module.exports=router;
