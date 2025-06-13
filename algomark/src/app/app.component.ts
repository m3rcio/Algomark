import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algomark';

    ngOnInit() {
   
  }
    imgPath1='/assets/images/featured-clients.png';
  
  constructor() {
    
  }

}
