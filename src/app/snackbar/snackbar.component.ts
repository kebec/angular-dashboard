import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackbar() {
    this.snackBar.open("This is the SnackBar message!", "Got it!");
  }

}
