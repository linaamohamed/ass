import { Routes } from '@angular/router';
import { Notfound } from './notfound/notfound';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Protofolio } from './protofolio/protofolio';

import { Home } from './home/home';


export const routes: Routes = [
  
{path:'',component:Home},
{path:'about',component:About ,title:'about component'},
{path:'protofolio',component:Protofolio ,title:'protofolio component'},
{path:'contact',component:Contact ,title:'contact component'},
{path:'**',component:Notfound}
];
