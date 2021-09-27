import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ButtonComponent } from '../components/button/button.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DashboardComponent } from '../screens/dashboard/dashboard.component'

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ ButtonComponent, DashboardComponent, NavbarComponent ],
  exports: [ ButtonComponent, DashboardComponent, NavbarComponent,  CommonModule, FormsModule]
})
export class SharedModule { }
