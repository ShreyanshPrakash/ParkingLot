import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin' , 
    loadChildren: () => import('./modules/admin/admin.module').then( m => m.AdminModule ),
    canLoad: [AuthGuard]
  },
  { path: 'customer',
    loadChildren: () => import('./modules/customer/customer.module').then( m => m.CustomerModule ),
    canLoad: [AuthGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
