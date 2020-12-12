import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() maxBlogs: number;
  @Input() page: number;
  @Output() newPage = new EventEmitter();

  leftClicked(){
    if(this.page > 1){
      this.newPage.emit((--this.page).toString());
    }
  }

  rightClicked(){
    if(this.page <= (this.maxBlogs % 6 == 0? (this.maxBlogs / 6) : ((this.maxBlogs / 6) + 1))){
      this.newPage.emit((++this.page).toString());
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
