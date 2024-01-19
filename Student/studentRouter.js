import express from 'express'
import studentController from './studentController.js';
const routers=express.Router();

routers.get('',studentController.getAll)
routers.post('',studentController.createStudent)
routers.put('/:id',studentController.updateStudent)
routers.delete('/:id',studentController.deleteStudent)
routers.get('/:id',studentController.getStudent)
export default routers;