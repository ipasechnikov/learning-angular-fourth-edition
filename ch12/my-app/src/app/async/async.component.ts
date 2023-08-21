import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncService } from '../async.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  data$: Observable<string[]> | undefined;

  constructor(private readonly asyncService: AsyncService) { }

  ngOnInit(): void {
    this.data$ = this.asyncService.getData();
  }

}
