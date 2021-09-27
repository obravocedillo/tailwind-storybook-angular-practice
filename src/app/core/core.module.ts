import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TasksService }from '../services/tasks.service'

@NgModule({
  declarations: [ ],
  imports: [
  ],
  providers: [TasksService]
})

export class CoreModule { }
