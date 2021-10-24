import { Component } from '@angular/core';
import { ProductService } from './Services/product.service';

@Component({
  selector: 'app-root',
  // template:"<h1>Hello again</h1>",
  // styles:["h1{color:red}", "h1{background-color: yellow}"]
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.scss']
  //,providers:[ProductService]
})

export class AppComponent {
  title = 'CourseDemo';
}
