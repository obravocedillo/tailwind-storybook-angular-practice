import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import{ Task }from '../interfaces/Tasks'

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  allTasks = new BehaviorSubject<Task[]>([]);
  
  constructor() {}
}
