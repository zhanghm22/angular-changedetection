import { Component, OnInit, OnDestroy, OnChanges, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';
import { ParentChildStatus } from '../type/type';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponentComponent implements OnInit {

  @Input() status: ParentChildStatus;

  constructor() { }

  desc: string = "";

  ngOnInit() {
    this.desc = this.desc + "ParentComponent ngOnInit" + "<br>";
    console.log("ParentComponent ngOnInit");
  }

  ngOnDestroy() {
    this.desc = this.desc + "ParentComponent ngOnDestroy" + "<br>";
    console.log("ParentComponent ngOnDestroy");
  }

  ngOnChanges() {
    this.desc = this.desc + "ParentComponent ngOnChanges" + "<br>";
    console.log("ParentComponent ngOnChanges");
  }

  ngDoCheck() {
    this.desc = this.desc + "ParentComponent ngDoCheck" + "<br>";
    console.log("ParentComponent ngDoCheck");
  }

}
