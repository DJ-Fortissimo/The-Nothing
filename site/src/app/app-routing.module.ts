import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NothingComponent } from './nothing/nothing.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path: 'nothing', component: NothingComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'help', component: HelpComponent,
  },
  {
    path: '',redirectTo:'home', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
