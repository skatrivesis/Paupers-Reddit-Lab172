import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class APIRequestService {
  apiUrl = 'https://www.reddit.com';

  constructor(private http:HttpClient) { }

  getPosts() {
    return this.http.get<Post>(`${this.apiUrl}/r/aww/.json`);
  }
}
