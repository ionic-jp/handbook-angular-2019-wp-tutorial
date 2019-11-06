import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wp-head',
  templateUrl: './wp-head.component.html',
  styleUrls: ['./wp-head.component.scss'],
})
export class WpHeadComponent implements OnInit {
  @Input() title: string;
  @Input() date: string;
  constructor() { }

  ngOnInit() {}

}
