import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'typo';

  // props
  cardTitle: string = 'Typo';
  cardText: string =
    'Our platform enhances your typewriting skills. Start today to have no regrets tomorrow. ';
}
