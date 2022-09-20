import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskService } from './task.service';
import { TaskType,Task } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app2.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'progress-stepper-workshop';
  task$: BehaviorSubject<Task[]>;

  constructor(private taskService: TaskService){
    this.task$ = this.taskService.task$;
  }

  selectTask(nextTaskType: TaskType){
    this.taskService.updateActiveTask(nextTaskType);
  }

  hideTask(taskType: TaskType){
    this.taskService.hideTask(taskType);
  }

  reset(){
    this.taskService.reset();
  }
}
