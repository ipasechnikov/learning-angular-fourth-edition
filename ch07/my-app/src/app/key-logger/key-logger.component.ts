import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { filter, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css']
})
export class KeyLoggerComponent implements OnInit {

  @Input() numeric = false;

  @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;
  keys = '';

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup');
    logger$.pipe(
      map(event => event.key.charCodeAt(0)),
      filter(charCode => {
        if (!this.numeric) {
          return true;
        }

        const charCodeZero = '0'.charCodeAt(0);
        const charCodeNine = '9'.charCodeAt(0);
        return (
          charCode >= charCodeZero && charCode <= charCodeNine
        );
      }),
      tap(charCode => this.keys += String.fromCharCode(charCode))
    ).subscribe();
  }

}
