import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <p [@myAwesomeAnimation]='state' (click)='animateMe()'>{{ someProperty }}</p>
  `,
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })),

      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ]))),

    ]),

  ]
})
export class AppComponent {

  constructor(private dataService:DataService) {

  }
  
  state:string = 'small';

  animateMe() {
    this.state = this.state === 'small' ? 'large' : 'small';
  }

  someProperty:string = '';

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }

  title = 'My First Angular App';
}
