import { Component, OnInit } from '@angular/core';
import { StubService } from '../stub.service';

@Component({
  selector: 'app-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.css']
})
export class StubComponent implements OnInit {

  msg = '';

  constructor(private readonly stub: StubService) { }

  ngOnInit(): void {
    this.msg = !this.stub.isBusy
      ? this.stub.name + ' is available'
      : this.stub.name + ' is on a mission';
  }

}
