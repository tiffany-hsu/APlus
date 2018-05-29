interface IAssessmentModelAngular{
    courseId?: number;
    assessment: [ {
        description: string;
        //questions: IQuestionsModel[];
        options: [String];
        assessmentId: number;
        shared: string;
        status: string;
    }];
}
export default IAssessmentModelAngular;
