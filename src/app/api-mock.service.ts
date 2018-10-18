import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
    return Observable.of([
      new Todo({id: 1, title: 'Read article', complete: false})
    ]);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return Observable.of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return Observable.of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return Observable.of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return null;
  }
}
