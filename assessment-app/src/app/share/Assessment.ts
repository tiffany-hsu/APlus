export default class Assessment {
    name: string;
    assessments: [{
        description: string;
        options: [String];
        id: string;
        shared: string;
        status: string;
    }];
}