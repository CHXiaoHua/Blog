import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';

const perPage = 6
const allPosts = Number.MAX_SAFE_INTEGER

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPosts(page, tag, category): Observable<BlogPost[]> {
    if(!tag && !category){
      return this.http.get<BlogPost[]>(`https://web422assignmentweb.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`);
    }
    else if(!category){
      return this.http.get<BlogPost[]>(`https://web422assignmentweb.herokuapp.com/api/posts?page=${page}&perPage=${perPage}&tag=${tag}`);
    }
    else if(!tag){
      return this.http.get<BlogPost[]>(`https://web422assignmentweb.herokuapp.com/api/posts?page=${page}&perPage=${perPage}&category=${category}`);
    }
    return this.http.get<BlogPost[]>(`https://web422assignmentweb.herokuapp.com/api/posts?page=${page}&perPage=${perPage}&tag=${tag}&category=${category}`);
  }

  getPostbyId(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://web422assignmentweb.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any>{
    return this.http.get<any>('https://web422assignmentweb.herokuapp.com/api/categories');
  }

  getTags(): Observable<string[]>{
    return this.http.get<string[]>('https://web422assignmentweb.herokuapp.com/api/tags');
  }

  getAllPost():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`https://web422assignmentweb.herokuapp.com/api/posts?page=1&perPage=${allPosts}`);
  }

  newPost(data:BlogPost):Observable<any>{
    return this.http.post<any>(`https://web422assignmentweb.herokuapp.com/api/posts`, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any>{
    return this.http.put<any>(`https://web422assignmentweb.herokuapp.com/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any>{
    return this.http.delete<any>(`https://web422assignmentweb.herokuapp.com/api/posts/${id}`);
  }

  constructor(private http: HttpClient) { }
}
