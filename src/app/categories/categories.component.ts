import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categories: Array<any>;
  private categoriesSub: any;
   
  constructor(private post: PostService) { }

  ngOnInit(): void {
    this.categoriesSub = this.post.getCategories().subscribe(data => this.categories = data);
  }

  ngOnDestroy(){
    this.categoriesSub.unsubscribe();
  }
}
