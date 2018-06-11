"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var QuestionModel = /** @class */ (function () {
    function QuestionModel() {
        this.createSchema();
        this.createModel();
    }
    QuestionModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            assessmentId: Number,
            question: [{
                    questionTitle: String,
                    description: String,
                    questionId: Number
                    //options: [String];
                }]
        }, { collection: 'questions' });
    };
    QuestionModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Questions", this.schema);
    };
    //see all records in a collection
    QuestionModel.prototype.retrieveAllQuestions = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return QuestionModel;
}());
exports.QuestionModel = QuestionModel;
