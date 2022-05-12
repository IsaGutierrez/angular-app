import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { IssuesComponent } from './views/issues/issues.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'issues',
    component: IssuesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
