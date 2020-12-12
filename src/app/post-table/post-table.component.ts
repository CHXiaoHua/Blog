import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit, OnDestroy {

  blogPosts: Array<BlogPost> = [];
  private blogPostsSub: any;

  constructor(private post: PostService, private route: Router) { }

  ngOnInit(): void {
    this.blogPostsSub = this.post.getAllPost().subscribe(data => this.blogPosts = data);
  }

  rowClicked(e, id){
    this.route.navigate(['admin/post/',id]);
  }

  ngOnDestroy() {
    this.blogPostsSub.unsubscribe();
  }

}
