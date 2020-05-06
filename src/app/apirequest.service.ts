import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class APIRequestService {
  apiUrl = 'https://www.reddit.com';

  constructor(private http:HttpClient) { }

  getPosts() {
    return this.http.get<Posts>(`${this.apiUrl}/r/aww/.json`);
  }
}
