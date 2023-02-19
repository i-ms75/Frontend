import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import{gri}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private route:Router) { }
  viewData()
  {
    console.log("Called");
    this.route.navigateByUrl("/GridView");
  }
  goHome()
  {
    this.route.navigateByUrl("/");
  }
  pos()
  {
    this.route.navigateByUrl("POS");
  }
  login()
  {
    this.route.navigateByUrl("Login");
  }

  ngOnInit(): void {
  }

}
