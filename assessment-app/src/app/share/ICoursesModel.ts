interface ICourseModelAngular {
    teacherId: number;
    name: String,
    description: String,
    courseId: Number,
    //students: IStudentsModel[];
    total_assessments: Number,
    total_students: Number,
    owner: String //userId
}
export default ICourseModelAngular;



