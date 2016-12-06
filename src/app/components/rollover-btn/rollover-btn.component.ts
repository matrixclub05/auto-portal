import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-rollover-btn',
  templateUrl: './rollover-btn.component.html',
  styleUrls: ['./rollover-btn.component.scss']
})
export class RolloverBtnComponent implements OnInit {
  @Input() text: string;
  @Input() height: number = 38;
  constructor() { }

  ngOnInit() {
  }

}
