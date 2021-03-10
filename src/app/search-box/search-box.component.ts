import { Component, OnInit } from '@angular/core';
import {SearchboxService} from '../searchbox.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  itemList: any[] | undefined;

  constructor(private searchService: SearchboxService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  search(input: any) {
    this.searchService.getSearchResults(input).subscribe( result => {
      this.itemList = result._embedded.events;
      console.log('result' + result);
    });
  }
}
