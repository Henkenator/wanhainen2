import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayDropdown = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    //console.log(el);
    /*event.preventDefault();
    event.srcElement.classList.toggle('is-open');
    console.log(event.srcElement);*/
    //el.srcElement.classList.toggle('is-open');
    this.displayDropdown = !this.displayDropdown;

  }
}
