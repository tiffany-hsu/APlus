import Mongoose = require("mongoose");

interface ICourseModel extends Mongoose.Document {
    name: string;
    description: string;
    courseId: number;
    due: string;
    state: string;
    owner: string;
}
export {ICourseModel};