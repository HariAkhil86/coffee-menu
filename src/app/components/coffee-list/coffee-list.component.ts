import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService, Coffee } from '../../services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffees: Coffee[] = [];
  loading = true;
  error: string | null = null;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeService.getCoffees().subscribe({
      next: (data) => {
        this.coffees = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load coffee list.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
