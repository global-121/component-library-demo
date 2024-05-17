import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  payments = [
    {
      id: '1',
      title: 'First payment',
      amount: 100,
    },
    {
      id: '2',
      title: 'Second payment',
      amount: 150,
    },
  ];
}
