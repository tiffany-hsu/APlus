import Mongoose = require("mongoose");

interface IQuestionModel extends Mongoose.Document {
    assessmentId: Number;
    question: [ {
        questionTitle: String;
        description?: String;
        questionId: Number;
        //options: [String];
    }];
}
export {IQuestionModel};