import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
  

}
