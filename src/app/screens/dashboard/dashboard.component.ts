import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /**
   * 
   * @param taskService task setvice instance
   */
  constructor(private taskService: TasksService) {
    console.log(taskService.allTasks.value);
  }

  ngOnInit(): void {
  }

}
