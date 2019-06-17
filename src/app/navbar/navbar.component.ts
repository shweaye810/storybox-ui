import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private journalService: JournalService) { }

  ngOnInit() {
  }

}
