import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CoursesComponent } from './courses/courses.component';
import { AssessmentsComponent } from './assessments/assessments.component';

/*import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
*/

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'welcome', component: WelcomeComponent},
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/:id', component: AssessmentsComponent },
    { path: 'assessments', component: AssessmentsComponent}
    /*{ path: 'list', component: ListsComponent },
    { path: 'list/:id', component: ListComponent}*/
];

export const routing = RouterModule.forRoot(routes);

