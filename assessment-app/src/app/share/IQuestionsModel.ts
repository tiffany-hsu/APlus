interface IQuestionModelAngular{
    assessmentId: Number;
    question: [ {
        questionTitle: String;
        description?: String;
        questionID: Number;
        //options: [String];
    }];
}
export default IQuestionModelAngular;
