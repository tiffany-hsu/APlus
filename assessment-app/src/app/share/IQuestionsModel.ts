interface IQuestionModelAngular{
    assessmentId: Number;
    question: [ {
        questionTitle: String;
        description?: String;
        questionId: Number;
        //options: [String];
    }];
}
export default IQuestionModelAngular;
