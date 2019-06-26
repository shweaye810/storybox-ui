import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { Journal } from './journal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private journalURL: string = environment.journalURL;
  private searchText: string;
  constructor(private http: HttpClient) { }
  getJournals(): Observable<any> {
    console.log("JournalService>getJournals>searchText", this.searchText)
    if (this.searchText)
      return this.http.get<any[]>(this.journalURL + "/search", 
      {params: {"text" : this.searchText} } );
    return this.http.get<any[]>(this.journalURL)
  }
  addJournal(journal: Journal): Observable<Journal> {
    return this.http.post<any>(this.journalURL, journal, httpOptions);
  }

  setSearchText(text: string) {
    this.searchText = text;
  }
}
