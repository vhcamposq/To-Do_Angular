import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string;
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  onSubmit(): void {
    const todo = {
      title: this.title,
      completed: false
    };
    this.addTodo.emit(todo);
    this.title = '';
  }
}
