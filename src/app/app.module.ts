import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'categories', component: CategoriesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
