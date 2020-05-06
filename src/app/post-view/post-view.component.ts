import { Component, OnInit, Input } from '@angular/core';
import { APIRequestService } from '../apirequest.service';
import { Post, SinglePost } from '../interfaces/post';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
post:Post;

  constructor(private apiserv:APIRequestService) { }

  ngOnInit(): void {
    this.apiserv.getPosts().subscribe(
      (data: Post) => this.post = { ...data },
      error => console.error(error)
    );
  }

}
