import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ng-client';
  posts: any[] = [];
  errorMessage!: string;

  constructor(private data_service: PostService) { }

  // ngOnInit() {
  //   this.data_service.getAllPosts().subscribe({
  //     next: (data) => {
  //       this.posts = data;
  //       console.log(this.posts);
  //     },
  //     error: (error) => {
  //       this.errorMessage = error;
  //     },
  //   });
  // }
}
