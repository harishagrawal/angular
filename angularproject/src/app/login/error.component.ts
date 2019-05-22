import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <h2>Invalid credentials .. Try again</h2>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
