import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutProjectPage } from './pages/about-project-page/about-project-page.component';
import { RoutingPage } from './pages/routing-page/routing-page.component';
import { BreadcrumsModule } from './components/breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutProjectPage,
    RoutingPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumsModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
