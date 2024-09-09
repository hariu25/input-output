import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // Import this module


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    NoopAnimationsModule,
    InputTextModule,
    ButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
