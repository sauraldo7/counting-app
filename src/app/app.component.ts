import { Component } from '@angular/core';
import { count } from 'console';
import { exit } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'counting-app';
  count: number = 0;


  handleIncrese = () => {
  
    this.count= this.count+1;
    if (this.count===11) {
      this.count= 0;

    }
  }
  handleDecrese = () => {
   
    if (this.count){
      this.count= this.count-1;
    }
  }
  handleReset = () => {
    this.count= 0;
  }
}
