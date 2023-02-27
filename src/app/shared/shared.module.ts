import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckboxLabelComponent } from './components/checkbox-label/checkbox-label.component';
const components = [NavbarComponent, CheckboxLabelComponent];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class SharedModule {}
