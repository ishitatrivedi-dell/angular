import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Welcome to angular Mohit Soni';
  data = 'This is a test data';
  posts: any[] = [];
  postreq: string = "";

  async ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.posts = json)
      .catch(error => console.error('Error fetching posts:', error));
  }

  testdata() {
    console.log("This is a test data from the component");
  }

  async getnotes() {

      const rawResponse = await fetch('https://skill-scheduler.onrender.com/api/notes/yesterday', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "title": "Review Functions",
          "content": "Studied callback functions in JavaScript."
        })
      });
      const content = await rawResponse.json();
    
      this.postreq = JSON.stringify(content)
  }

}