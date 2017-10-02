import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { FormsComponent } from "./forms/forms.component";

export const router: Routes = [
	{ path: "forms", component: FormsComponent },
    { path: "", redirectTo: "forms", pathMatch: "full" }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);