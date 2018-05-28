import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IAssessmentModel} from '../interfaces/IAssessmentModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class AssessmentModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                courseId: Number,
                assessments: [ {
                description: String,
                options: [String],
                assessmentId: Number,
                shared: String,
                status: String
                }]
            }, {collection: 'assessments'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IAssessmentModel>("Assessment", this.schema);
    }
    
    public retrieveAssessmentsDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveAssessmentsCount(response:any, filter:Object) {
        var query = this.model.find(filter).select('assessments').count();
        query.exec( (err, numberOfAssessments) => {
            console.log('number of assessments: ' + numberOfAssessments);
            response.json(numberOfAssessments);
        });
    }

}
export {AssessmentModel};