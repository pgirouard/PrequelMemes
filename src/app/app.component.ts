import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class yourService {
  constructor(public http:Http){}
  getData() {
    return this.http.get("imageResults.json")
        .map((res:Response) => res.json().searchResults);
  }
}

let myjsondata;

this.yourService.getData().subscribe((data) => {
  console.log(data);
  this.myjsondata = data;
});

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
  
  //data;
  // getLocalFile(){
  //   return this.http.get('assets/imageResults.json')
  //       .subscribe(res => this.data = res.json());
  // }
  //jsonResponse = this.getLocalFile();

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
