import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'detailpage/:id',component: DetailPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
