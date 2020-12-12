import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  blogPost: BlogPost;
  tags: string;
  private querySub: any;

  constructor(private post: PostService, private Aroute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.querySub = this.Aroute.params.subscribe(params => {
      this.post.getPostbyId(params["id"]).subscribe(data => {
        this.blogPost = data; 
        this.tags = this.blogPost.tags.toString();
      });
    });
  }

  formSubmit() {
    this.blogPost.tags = this.tags.split(',').map(tag=>tag.trim());
    this.post.updatePostById(this.blogPost._id,this.blogPost).subscribe((data)=>this.route.navigate(['admin']));
  }

  deletePost() {
    this.post.deletePostById(this.blogPost._id).subscribe((data)=>this.route.navigate(['admin']));
  }

  ngOnDestroy() {
    this.querySub.unsubscribe();
  }

}
