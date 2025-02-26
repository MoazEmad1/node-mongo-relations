const express=require('express');
const router=express.Router();
const verifyToken=require('../middleware/verifyToken');
const classController=require('../controllers/classController');
const checkRole=require('../middleware/checkRole');

router.post('/create',verifyToken,checkRole('Teacher'),classController.createClass);
router.post('/:classId/add-student',verifyToken, checkRole('Teacher'),classController.addStudentToClass);
router.get('/:classId',verifyToken,classController.getClassDetails);
router.delete('/:classId', verifyToken,checkRole('Teacher'),classController.deleteClass);

module.exports=router;
