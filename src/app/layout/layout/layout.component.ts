import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'empathy-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  constructor(
    private router: Router
  ) {

  }

  goDashboard() {
    this.router.navigate(['/'])
  }
}
