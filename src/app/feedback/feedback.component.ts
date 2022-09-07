import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/feedback';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback:Feedback={};
  location=['Huntsville','Springdale','Orlando','Augusta','New York'];
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this._snackBar.open('Feedback added successfully', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })

  }

}
