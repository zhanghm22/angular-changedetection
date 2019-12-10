import { Component, OnInit, OnDestroy, OnChanges, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-pure-single-component',
  templateUrl: './pure-single-component.component.html',
  styleUrls: ['./pure-single-component.component.css']
})
export class PureSingleComponentComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  @Input() status: string;

  constructor() { }

  desc: string = "";

  ngOnInit() {
    this.desc = this.desc + "PureSingleComponent ngOnInit" + "<br>";
    console.log("PureSingleComponent ngOnInit");
  }

  ngOnDestroy() {
    this.desc = this.desc + "PureSingleComponent ngOnDestroy" + "<br>";
    console.log("PureSingleComponent ngOnDestroy");
  }

  ngOnChanges() {
    this.desc = this.desc + "PureSingleComponent ngOnChanges" + "<br>";
    console.log("PureSingleComponent ngOnChanges");
  }

  ngDoCheck() {
    this.desc = this.desc + "PureSingleComponent ngDoCheck" + "<br>";
    console.log("PureSingleComponent ngDoCheck");
  }

}
