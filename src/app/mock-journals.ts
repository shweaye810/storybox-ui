import { Journal } from './journal';
import { DatePipe } from '@angular/common';


let value: Journal[] = []
let datePipe: DatePipe = new DatePipe('en-US');
for (var i = 0; i < 100; i++) {
    let journal = new Journal();
    let date = Date.now() + i;
    journal.date = datePipe.transform(date)
    journal.text = "some very very long text" + i
    value.push(journal)
}

export const JOURNALS = value;