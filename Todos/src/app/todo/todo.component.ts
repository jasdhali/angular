import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  private todos;
  private newTodo;
  private activeTasks;
  private path;

  constructor(private todoService: TodoService, 
  private   route: ActivatedRoute) {  }

getTodos(query = ''){
  return this.todoService.get(query).then(todos => {
    this.todos = todos;
    this.activeTasks = this.todos.filter(todo => todo.isDone).length;
  });
}


  addTodo() {
    this.todoService.add({ title: this.newTodo, isDone: false }).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = ''; // clear input form value
    });
  }

   ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
      this.getTodos(this.path);
    });
  }

  destroyTodo(todo) {
  this.todoService.delete(todo).then(() => {
    return this.getTodos();
   });
  }
  
  updateTodo(todo, newValue) {
    todo.title = newValue;
    return this.todoService.put(todo).then(() => {
      todo.editing = false;
      return this.getTodos();
    });
  }
  
  clearCompleted() {
  this.todoService.deleteCompleted().then(() => {
    return this.getTodos();
  });
  }
  
}