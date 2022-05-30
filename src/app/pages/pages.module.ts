import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";

import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";

@NgModule({
    declarations: [
        DashboardComponent,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        PagesComponent
    ],
    imports: [ 
        CommonModule,
        SharedModule,
        // RouterModule
        AppRoutingModule,
    ]
})
export class PagesModule {}