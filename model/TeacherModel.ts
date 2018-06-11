import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ITeacherModel} from '../interfaces/ITeacherModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class TeacherModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                teacherId: Number,
                fname: String,
                lname: String,
                email: String,
            }, {collection: 'teachers'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ITeacherModel>("Teachers", this.schema);
    }

    //see all records in a collection
    public retrieveAllTeachers(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}
export {TeacherModel};