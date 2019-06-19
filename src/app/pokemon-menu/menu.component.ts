import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   
  constructor(
    private router: Router
  ) { }

  items: MenuItem[];

  ngOnInit() {

    this.items = [
      {label: 'Home', icon: 'pi pi-info', routerLink: ['']},
      {label: 'City', icon: 'pi pi-refresh', routerLink: ['/city']},
      {label: 'Map', icon: 'pi pi-times', routerLink: ['/map']},
      {label: 'List', icon: 'pi pi-info', routerLink: ['/list']},
      {label: 'Help', icon: 'pi pi-info', routerLink: ['/help']}
    ];    

  }

  teste(parm){
    let teste = '/'+parm; 
    this.router.navigate([teste]);
  }


}
