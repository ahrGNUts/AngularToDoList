export class ToDoItem {
  public taskName: string;
  public isComplete: boolean;

  constructor(taskName: string, isComplete: boolean) {
    this.taskName = taskName;
    this.isComplete = isComplete;
  }
}
