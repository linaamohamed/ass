import { Component } from '@angular/core';
import { Star } from '../star/star';

@Component({
  selector: 'app-protofolio',
  imports: [Star],
  templateUrl: './protofolio.html',
  styleUrl: './protofolio.scss'
})
export class Protofolio {
  titlehome:string =''
colorhome:string='black'
Protofoliosrc: string[]=[

  'poert1.png',
   'port2.png',
    'port3.png',
     'poert1.png',
      'port2.png',
       'port3.png',
]
flag:boolean=true;
modelimg:string=''
hideModel(element: EventTarget | null, img: HTMLImageElement): void {
  if (element == img) return;
  this.flag = true;
}

}

