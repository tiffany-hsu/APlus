import Mongoose = require("mongoose");

interface ICourseModel extends Mongoose.Document {
    teacherId: number;
    name: string;
    description: string;
    courseId: number;
    //students: IStudentsModel[];
    total_assessments: number;
    total_students: number;
    owner: string;
}
export {ICourseModel};