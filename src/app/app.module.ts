import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes} from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { PracticeAreasComponent } from './components/practice-areas/practice-areas.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EnglishComponent } from './components/english/english.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {PracticeAreasModule} from './components/practice-areas/practice-areas.module';

export const appRoutes: Routes = [
  /*{path: '', redirectTo: 'start', pathMatch: 'full'},*/
  {path: '', component: StartComponent},
  {path: 'om-oss', component: AboutUsComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'english', component: EnglishComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartComponent,
    PracticeAreasComponent,
    ContactComponent,
    PageNotFoundComponent,
    EnglishComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {
        scrollPositionRestoration: 'enabled',
        enableTracing: true }, // <-- debugging purposes only
    ),
    PracticeAreasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
