import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes} from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { PracticeAreasComponent } from './components/practice-areas/practice-areas.component';
import { AssociatesComponent } from './components/associates/associates.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EnglishComponent } from './components/english/english.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'verksamhetsomraden', component: PracticeAreasComponent},
  {path: 'medarbetare', component: AssociatesComponent},
  {path: 'samarbeten', component: CollaboratorsComponent},
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
    AssociatesComponent,
    CollaboratorsComponent,
    ContactComponent,
    PageNotFoundComponent,
    EnglishComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
