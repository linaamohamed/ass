import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.scss'
})
export class Star {
@Input() titleStar:string=' ';
@Input() customColor:string=' ';
}
