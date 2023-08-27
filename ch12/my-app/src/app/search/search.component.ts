import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchForm = new FormGroup({
    searchText: new FormControl('', Validators.required)
  });

  get searchText() {
    return this.searchForm.controls.searchText;
  }

  search(): void {
    if (this.searchForm.valid) {
      console.log(`You searched for: ${this.searchText.value}`);
    }
  }

}
