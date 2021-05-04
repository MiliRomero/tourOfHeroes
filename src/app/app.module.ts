import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "heroes", component: HeroesComponent }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService, MessageService] //no hace falta agregar los providers pq esta la bandera de "providedIn"
})
export class AppModule {}
