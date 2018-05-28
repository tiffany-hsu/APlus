import Mongoose = require("mongoose");

interface IAssessmentModel extends Mongoose.Document {
    courseId: number;
    assessment: [ {
        description: string;
        options: [String];
        assessmentId: number;
        shared: string;
        status: string;
    }];
}
export {IAssessmentModel};
