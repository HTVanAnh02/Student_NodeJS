import { Student } from "./student.js";

class studentSerivce{
    async getAllService(){
        return await Student.find();
    }
    async createStudentService(data){
        return await Student.create(data);
    }
    async getStudent(id){
        return await Student.findById(id);
    }
    async updateStudent(id,data){
        return await Student.findByIdAndUpdate(id,data);
    }
    async deleteStudent(id){
        return await Student.findByIdAndDelete(id);
    }
}
export default new studentSerivce;