import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PracticeAreasComponent} from './practice-areas.component';
import {RouterModule, Routes} from '@angular/router';
import {CrimeLawComponent} from './crime-law/crime-law.component';
import {FamilyLawComponent} from './family-law/family-law.component';
import {MigrationLawComponent} from './migration-law/migration-law.component';
import {CommonModule} from '@angular/common';


export const practiceAreasRoutes: Routes = [
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
      }
    ]
  },
];

@NgModule({
  declarations: [
    CrimeLawComponent,
    FamilyLawComponent,
    MigrationLawComponent
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
