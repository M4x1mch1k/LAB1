import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphPage } from './graph.page';

const routes: Routes = [
  {
    path: '',
    component: GraphPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphPageRoutingModule {}
