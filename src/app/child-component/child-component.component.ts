import { Component, OnInit, OnDestroy, OnChanges, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';
import { ParentChildStatus } from '../type/type';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponentComponent implements OnInit {

  //@Input() status: string;
  @Input() status: ParentChildStatus;

  constructor() { }

  desc: string = "";

  ngOnInit() {
    this.desc = this.desc + "ChildComponent ngOnInit" + "<br>";
    console.log("ChildComponent ngOnInit");
  }

  ngOnDestroy() {
    this.desc = this.desc + "ChildComponent ngOnDestroy" + "<br>";
    console.log("ChildComponent ngOnDestroy");
  }

  ngOnChanges() {
    this.desc = this.desc + "ChildComponent ngOnChanges" + "<br>";
    console.log("ChildComponent ngOnChanges");
  }

  ngDoCheck() {
    this.desc = this.desc + "ChildComponent ngDoCheck" + "<br>";
    console.log("ChildComponent ngDoCheck");
  }

}
