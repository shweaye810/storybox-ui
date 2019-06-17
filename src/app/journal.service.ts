import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Journal } from './journal';
import { JOURNALS } from './mock-journals';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor() { }

  getJournals(): Observable<Journal[]> {
    return of(JOURNALS)
  }
}
