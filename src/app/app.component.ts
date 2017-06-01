import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Test';
  //link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  link = 'https://sleepy-oasis-47541.herokuapp.com/keywords?tags='
  maxImages = 50;
  http: Http;
  imageResults = [];
  
  constructor(http: Http){
    this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void {
    console.log(`User Entered: ${searchTerm.value}`);
    
    var apiLink = this.link + searchTerm.value + '&skipAmt=0';

    this.http.request(apiLink).subscribe((res: Response) => {
      this.imageResults = res.json();
      console.log(this.imageResults);
    });
  }
}
