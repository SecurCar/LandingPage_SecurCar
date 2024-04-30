import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatHint} from "@angular/material/form-field";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatIcon,
    MatHint,
    MatLabel
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
