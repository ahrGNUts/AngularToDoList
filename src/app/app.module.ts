import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoListItemComponent } from './todo/todo-list/todo-list-item/todo-list-item.component';
import { TodoListDetailComponent } from './todo/todo-list-detail/todo-list-detail.component';
import { TodoListEditComponent } from './todo/todo-list-edit/todo-list-edit.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListDetailComponent,
    TodoListEditComponent,
    AuthComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
