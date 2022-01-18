import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {

  @Input() isReadMore: boolean = false;
  public isCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }

}
