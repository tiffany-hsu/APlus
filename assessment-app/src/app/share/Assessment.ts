export default class Assessment {
    teacherId: number;
    courseId: string;
    assessments: [{
        description: string;
        total_questions: number;
        //options: [String];
        assessmentId: string;
        shared: string;
        due_date: string;

    }];
}