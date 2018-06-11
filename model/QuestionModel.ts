import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IQuestionModel} from '../interfaces/IQuestionModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class QuestionModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                assessmentId: Number,
                question: [ {
                    questionTitle: String,
                    description: String,
                    questionId: Number
                    //options: [String];
                }]
            }, {collection: 'questions'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IQuestionModel>("Questions", this.schema);
    }

    //see all records in a collection
    public retrieveAllQuestions(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}
export {QuestionModel};