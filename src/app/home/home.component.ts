import { Component, OnInit } from '@angular/core';
import { Journal } from 'src/app/journal';
import { DatePipe } from '@angular/common';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  journals: Journal[] = [];
  name: String = "Shwe Aye";
  constructor(private datePipe: DatePipe, private journalService: JournalService) { }

  ngOnInit() {
    this.getJournals();
  }

  getJournals() {
    this.journalService.getJournals().subscribe(journals => this.journals = journals);
  }

}
