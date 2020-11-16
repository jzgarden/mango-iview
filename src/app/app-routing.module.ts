import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './test/test.component';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import {APP_BASE_HREF} from '@angular/common';

const routes: Routes = [
  {path: 'test233', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
