export enum TaskType {
  Step1=1,
  Step2,
  Step3,
  Step4,
  Step5,
}

export interface Task {
  title: string;
  type: TaskType;
  isVisible: boolean;
  isComplete: boolean;
  isActive?: boolean;
}
