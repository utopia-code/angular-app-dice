import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dice';

  diceLeft = `../assets/images/dice1.png`;;
  diceRight = `../assets/images/dice4.png`;

  constructor() { }

  number1: number = 1;
  number2: number = 4;

  rollDice(): void {
    this.number1 = Math.round(Math.random() * 5) + 1;
    this.number2 = Math.round(Math.random() * 5) + 1;

    this.diceLeft = `../assets/images/dice${this.number1}.png`;
    this.diceRight = `../assets/images/dice${this.number2}.png`;
  }
}
