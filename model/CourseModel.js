"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var CourseModel = /** @class */ (function () {
    function CourseModel() {
        this.createSchema();
        this.createModel();
    }
    CourseModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            teacherId: Number,
            name: String,
            description: String,
            courseId: Number,
            //students: IStudentsModel[];
            total_assessments: Number,
            total_students: Number,
            owner: String
        }, { collection: 'courses' });
    };
    CourseModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Courses", this.schema);
    };
    //see all records in a collection
    CourseModel.prototype.retrieveAllCourses = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    //retrieve single course's details
    CourseModel.prototype.retrieveCoursesDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return CourseModel;
}());
exports.CourseModel = CourseModel;
