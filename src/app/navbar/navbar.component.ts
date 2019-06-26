import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JournalService } from '../journal.service';
import { AuthService } from '../auth.service';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText: string = "";
  @Output() searchedText =  new EventEmitter<string>();

  constructor(private journalService: JournalService,
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  search() {
    console.log("you pressed enter. searchText:", this.searchText)

    this.journalService.setSearchText(this.searchText);
    this.router.navigate(["/home"])

  }

}
