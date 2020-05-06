import { Component, OnInit, Input } from '@angular/core';
import { APIRequestService } from '../apirequest.service';
import { Posts, SinglePost } from '../interfaces/posts';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
@Input() singlePost:SinglePost;

  constructor(private apiserv:APIRequestService) { }

  ngOnInit(): void {
  }

}
