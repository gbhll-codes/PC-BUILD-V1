import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "cartmodal",
    loadChildren: () =>
      import("./pages/cartmodal/cartmodal.module").then(
        m => m.CartmodalPageModule
      )
  },
  {
    path: 'pcbuild',
    loadChildren: () => import('./pcbuild/pcbuild.module').then( m => m.PcbuildPageModule)
  },
  {
    path: 'user-registration',
    loadChildren: () => import('./user-registration/user-registration.module').then( m => m.UserRegistrationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
