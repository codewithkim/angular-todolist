import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"]
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter(); // any becuase it does not have id

  title: string;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // console.log("Here " + this.title);
    const todo = {
      title: this.title,
      completed: false
    };

    this.addTodo.emit(todo);
  }
}
