import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task, TaskType } from "./types";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {
      title: `Step ${TaskType.Step1}`,
      type: TaskType.Step1,
      isVisible: true,
      isComplete: false
    },
    {
      title: `Step ${TaskType.Step2}`,
      type: TaskType.Step2,
      isVisible: true,
      isComplete: false
    },
    {
      title: `Step ${TaskType.Step3}`,
      type: TaskType.Step3,
      isVisible: true,
      isComplete: false
    },
    {
      title: `Step ${TaskType.Step4}`,
      type: TaskType.Step4,
      isVisible: true,
      isComplete: false
    },
    {
      title: `Step ${TaskType.Step5}`,
      type: TaskType.Step5,
      isVisible: true,
      isComplete: false
    },
  ];

  task$: BehaviorSubject<Task[]>;

  get visibleTasks(){
    return this.tasks.filter(x=>x.isVisible);
  }

  constructor(){
    this.task$ = new BehaviorSubject(this.visibleTasks);
  }

  getTask(taskType: TaskType) {
    return {...this.tasks.find(x=>x.type === taskType)} as Task;
  }

  updateActiveTask(nextTaskType: TaskType){
    this.deactivateTasks();
    this.tasks.forEach(x=>{
      if(x.type === nextTaskType){
        x.isActive = true;
      }
    });
    this.push();
  }

  hideTask(taskType: TaskType){
    this.tasks.forEach(x=>{
      if(x.type === taskType){
        x.isVisible = false;
      }
    });
    this.push();
  }

  reset(){
    this.deactivateTasks();
    this.tasks.forEach(x=>{
      x.isVisible = true;
      x.isComplete = true;
    });
    this.push();
  }

  private push() {
    this.task$.next(this.visibleTasks);
  }

  private deactivateTasks(){
    this.tasks.forEach(x=>x.isActive = false);
  }
}
