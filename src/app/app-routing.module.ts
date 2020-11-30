import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { DrainableComponent } from './drainable/drainable.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'index',
  pathMatch: 'full'
},
{ path: 'index', component: IndexComponent },
{ path: 'dashboard/:walletId', component: DashboardComponent },
{ path: 'drainable/:walletId', component: DrainableComponent },

{ path: 'details/:id/:walletId', component: DetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
