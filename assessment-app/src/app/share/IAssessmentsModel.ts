interface IAssessmentModelAngular{
    courseId: number;
    assessment: [ {
        description: string;
        options: [String];
        assessmentId: number;
        shared: string;
        status: string;
    }];
}
export default IAssessmentModelAngular;
