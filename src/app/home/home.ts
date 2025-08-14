import { Component } from '@angular/core';
import { Star } from "../star/star";

@Component({
  selector: 'app-home',
  imports: [Star],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
titlehome:string ='start framework'
colorhome:string='white'
}
