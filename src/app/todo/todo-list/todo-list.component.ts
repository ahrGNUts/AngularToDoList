import { Component, OnInit } from '@angular/core';

import { ToDoItem } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listItems: ToDoItem[] = [
    new ToDoItem(
      'Item 1',
      false
    ),
    new ToDoItem(
      'Item 2',
      false
    ),
    new ToDoItem(
      'Item 3',
      true
    ),
    new ToDoItem(
      'Item 4',
      false
    ),
    new ToDoItem(
      'Item 5',
      true
    )
  ];

  selectedOptions; // for holding the selected list items

  constructor() { }

  ngOnInit() {
  }

  onSelectionChange(event) {
    console.log(this.selectedOptions);
  }

}
