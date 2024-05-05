import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'count-app-angular';

  countNumber = 0;

  increaseNumber() {
    this.countNumber++;
  }

  decreaseNumber() {
    this.countNumber--;
  }
}