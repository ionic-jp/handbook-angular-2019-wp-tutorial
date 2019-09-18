import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(public http: HttpClient) { }

  getPosts() {
    return this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/');
  }

  getArticle(id: number) {
    return this.http.get<{
      ID: number;
      title: string;
      content: string;
      date: string;
    }>('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/' + id);
  }
}
