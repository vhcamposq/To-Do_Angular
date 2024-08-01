import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleCompleted: EventEmitter<Todo> = new EventEmitter();

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

  onToggle(todo: Todo): void {
    this.toggleCompleted.emit(todo);
  }
}
