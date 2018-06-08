interface IAssessmentModelAngular{
    courseId?: Number;
    assessment: [ {
        description: String;
        total_questions: Number;
        due_date: String;
        //assigned_students: IStudentsModel[];
        //questions: IQuestionsModel[];
        //options: [String];
        assessmentId: Number;
        shared: String;
        //status: string;
    }];
}
export default IAssessmentModelAngular;
