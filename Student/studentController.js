import studentService from "./studentService.js";

class studentController {
    async getAll(req, res) {
        try {
            const lists = await studentService.getAllService();
            return res.status(200).json({ lists });
        } catch (error) {
            res.status(500).json({ error: 'Server Error' });
        }
    }
    async createStudent(req,res){
        try{
            console.log(req.body);
            const newStudent=await studentService.createStudentService(req.body);
            return res.status(200).json({newStudent});
        }catch(error){
            res.status(500).json({error:'Server Error'})
        }
    }
    async updateStudent(req,res){
        try{
            const {id} =req.params;
            const find=await studentService.getStudent(id);
            if(find){
                const updateStudent=await studentService.updateStudent(id,req.body);
                return res.status(200).json({msg:'Update succes',data:updateStudent});
            }
            return res.status(404).json({error:'Not found'})
        }catch(error){
            res.status(500).json({error:'Server Error'})
        }
    }
    async deleteStudent(req,res){
        try{
            const {id}=req.params;
            const deleteStudent=await studentService.deleteStudent(id);
            return res.status(200).json({msg:'Delete Succes',data:deleteStudent});
        }catch(error){
            res.status(500).json({error:'Server Error'})
        }
    }
    async getStudent(req,res){
        try{
            const {id}=req.params;
            const student=await studentService.getStudent(id);
            if(student){
                return res.status(200).json({data:student});
            }
            return res.status(404).json({msg:'Not found'});
        }catch(error){
            res.status(500).json({error:'Server Error'})
        }
    }
}

export default new studentController();
