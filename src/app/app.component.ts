import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  http: Http;
  imageResults = [];

  constructor(http: Http){
    this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void {
    console.log(`User Entered: ${searchTerm.value}`);
    var apiLink = this.link + searchTerm.value;

    this.http.request(apiLink).subscribe((res: Response) => {
      this.imageResults = res.json().data;
      console.log(this.imageResults);
    });
  }
}
