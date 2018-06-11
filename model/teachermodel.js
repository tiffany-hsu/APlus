"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var TeacherModel = /** @class */ (function () {
    function TeacherModel() {
        this.createSchema();
        this.createModel();
    }
    TeacherModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            teacherId: Number,
            fname: String,
            lname: String,
            email: String
        }, { collection: 'teachers' });
    };
    TeacherModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Teachers", this.schema);
    };
    //see all records in a collection
    TeacherModel.prototype.retrieveAllTeachers = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return TeacherModel;
}());
exports.TeacherModel = TeacherModel;
