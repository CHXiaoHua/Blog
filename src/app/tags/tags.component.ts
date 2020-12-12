import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit, OnDestroy {

  tags: Array<string>;
  private tagsSub: any;

  constructor(private post: PostService) { }

  ngOnInit(): void {
    this.tagsSub = this.post.getTags().subscribe(data => this.tags = data);
  }

  ngOnDestroy() {
    this.tagsSub.unsubscribe();
  }

}
