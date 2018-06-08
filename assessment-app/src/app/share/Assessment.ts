export default class Assessment {
    name: string;
    assessments: [{
        description: string;
        total_questions: number;
        //options: [String];
        id: string;
        shared: string;
        due_date: string;

    }];
}