import { Component } from '@angular/core';
import { CoffeeListComponent }  from './components/coffee-list/coffee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoffeeListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffee-menu';
}
