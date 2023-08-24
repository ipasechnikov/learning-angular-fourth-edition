import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

const heroes = ['Boothstomper', 'Drogfisher', 'Bloodyllips', 'Mr Bu Moverse', 'Piranhaelli'];

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor() { }

  getData(): Observable<string[]> {
    return of(heroes).pipe(delay(500));
  }

  setData(name: string): string[] {
    return [...heroes, name];
  }
}
