import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { DasboardComponent } from "./dasboard/dasboard.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { DasboardModule } from "./dasboard/dasboard.module";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: WelcomeComponent },

  { path: "about", component: AboutComponent },
  { path: "dashboard", component: DasboardComponent },
  // {path : 'dashboard' , loadChildren() => import('./dasboard/dasboard.component').then(m) => m.}
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes) , DasboardModule],
  exports: [RouterModule],
})
export class RoutingModule {}
