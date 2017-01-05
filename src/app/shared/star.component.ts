import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ai-star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void{
    console.log('on changes');
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(){
    this.notify.emit(`Le rating est présentement :  ${this.rating}.`);
  }

}
