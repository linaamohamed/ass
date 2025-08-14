import { Component } from '@angular/core';
import { Star } from '../star/star';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [Star,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  titlehome:string =''
colorhome:string='black'
userName:string='';
userAge!:number;
userEmail:string='';
userPassword:string=''
}
