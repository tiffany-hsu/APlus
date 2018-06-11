import Mongoose = require("mongoose");

interface ITeacherModel extends Mongoose.Document {
    teacherId: Number;
    fname: String;
    lname: String;
    email: String;
}
export {ITeacherModel};