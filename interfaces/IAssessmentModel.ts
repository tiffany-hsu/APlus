import Mongoose = require("mongoose");

interface IAssessmentModel extends Mongoose.Document {
    teacherId: number;
    courseId: number;
    assessment: [ {
        description: string;
        total_questions: number;
        due_date: string;
        options: [String];
        assessmentId: number;
        shared: string;
    }];
}
export {IAssessmentModel};
