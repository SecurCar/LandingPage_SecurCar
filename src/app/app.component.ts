import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LandingpageComponent} from "./landingpage/landingpage.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingpageComponent, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingpagesecurcar';
}
