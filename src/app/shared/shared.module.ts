import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SecLoadingComponent } from './components/sec-loading/sec-loading.component';
import { MainLoadingComponent } from './components/main-loading/main-loading.component';
import { CustumPopUpComponent } from './components/custum-pop-up/custum-pop-up.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SecLoadingComponent,
    MainLoadingComponent,
    CustumPopUpComponent,

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SecLoadingComponent,
    MainLoadingComponent,
    CustumPopUpComponent
  ]
})
export class SharedModule { }
