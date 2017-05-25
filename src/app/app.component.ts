import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


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
    
    //var apiLink = this.link + searchTerm.value;

    window.fetch('https://sleepy-oasis-47541.herokuapp.com/keywords', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            keywords: searchTerm
        })
    }).then((response) => {
        //if(err) console.log(err);
        console.log(response);
        // response.json().then( data => {
        //     //window.searchTerm = data;
        //     console.log(data);
        // });
    });

    // this.http.request(apiLink).subscribe((res: Response) => {
    //   this.imageResults = res.json().data;
    //   console.log(this.imageResults);
    // });
  }
}
