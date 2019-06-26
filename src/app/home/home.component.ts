import { Component, OnInit, OnDestroy } from '@angular/core';
import { Journal } from 'src/app/journal';
import { DatePipe } from '@angular/common';
import { JournalService } from '../journal.service';
import { AuthService } from '../auth.service';
import { stringify } from '@angular/core/src/util';
import { Router, NavigationEnd } from '@angular/router';

import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NavbarComponent } from '../navbar/navbar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.navSub.unsubscribe();
  }

  journals: Journal[] = [];
  token: any;
  searchText: string;
  navSub: Subscription;

  constructor(private datePipe: DatePipe, private journalService: JournalService,
    private authService: AuthService, private router: Router) {
    this.navSub = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.getJournals();
      }

    });
  }

  ngOnInit() {

    console.log("ngOnInit>this.journals: ", this.journals)
    this.getJournals();
    console.log("HomeComponent>token", this.authService.token);
  }

  getJournals() {
    let obs = null;

    obs = this.journalService.getJournals()
    obs.subscribe((journals: any) => {
      console.log("HomeComponent>getJournals", journals);
      this.journals = journals
      console.log("HomeComponent>this.journals", this.journals);

    });
  }

  add(text: String): void {
    console.log("text area NgModel text: ", text);
    text = text.trim();
    this.journalService.addJournal({ text } as Journal).subscribe(journal => {
      this.journals.shift();
      this.journals.unshift(journal)
    });
  }

}
