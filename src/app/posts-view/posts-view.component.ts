import { Component, OnInit } from '@angular/core';
import { APIRequestService } from '../apirequest.service';
import { Posts, SinglePost } from '../interfaces/posts';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {
posts:Posts;

  constructor(private apiserv:APIRequestService) { }

  ngOnInit(): void {
    this.apiserv.getPosts().subscribe(
      (data: Posts) => this.posts = { ...data },
      error => console.error(error)
    );
  }

}
