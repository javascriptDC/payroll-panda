import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { routesForChild } from '../routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    routesForChild,
    SharedModule,
  ],
  declarations: [LayoutComponent, FooterComponent, TopNavBarComponent]
})
export class LayoutModule { }
