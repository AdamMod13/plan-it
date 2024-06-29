import { Component } from '@angular/core';

@Component({
  selector: 'app-add-edit-task-modal',
  templateUrl: './add-edit-task-modal.component.html',
  styleUrl: './add-edit-task-modal.component.scss'
})
export class AddEditTaskModalComponent {
  public taskModalVisible: boolean = false;

  public toggleNewTaskModal() {
    this.taskModalVisible = !this.taskModalVisible;
  }

  public saveNewTask() {
  }
}
