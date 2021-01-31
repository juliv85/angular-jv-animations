import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BasicsComponent } from "./basics/basics.component";
import { InOutComponent } from "./in-out/in-out.component";

const routes: Routes = [
  { path: "basics", component: BasicsComponent },
  { path: "in-out", component: InOutComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, HelloComponent, BasicsComponent, InOutComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
