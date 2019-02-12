import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PracticeAreasComponent} from './practice-areas.component';
import {RouterModule, Routes} from '@angular/router';
import {CrimeLawComponent} from './crime-law/crime-law.component';
import {FamilyLawComponent} from './family-law/family-law.component';
import {MigrationLawComponent} from './migration-law/migration-law.component';
import {CommonModule} from '@angular/common';
import { SocialLawComponent } from './social-law/social-law.component';
import { PersonInjuriesComponent } from './person-injuries/person-injuries.component';
import { GeneralLawComponent } from './general-law/general-law.component';


export const practiceAreasRoutes: Routes = [
  {
    path: 'rattsomraden',
    redirectTo: 'rattsomraden/brottmal',
    pathMatch: 'full'
  },
  {
    path: 'rattsomraden',
    component: PracticeAreasComponent,
    children: [
      {
        path: 'brottmal',
        component: CrimeLawComponent
      },
      {
        path: 'familjeratt',
        component: FamilyLawComponent
      },
      {
        path: 'migrationsratt',
        component: MigrationLawComponent
      },
      {
        path: 'socialratt',
        component: SocialLawComponent
      },
      {
        path: 'personskaderegleringar',
        component: PersonInjuriesComponent
      },
      {
        path: 'allmanpraktik',
        component: GeneralLawComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    CrimeLawComponent,
    FamilyLawComponent,
    MigrationLawComponent,
    SocialLawComponent,
    PersonInjuriesComponent,
    GeneralLawComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(practiceAreasRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PracticeAreasModule {
}
