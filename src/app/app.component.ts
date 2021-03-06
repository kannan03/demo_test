import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridAngular;

    title = 'app';

    columnDefs = [
      {headerName: 'ThumbnailUrl', field: 'thumbnailUrl', sortable: true, filter: true},
      {headerName: 'AlbumId', field: 'albumId', sortable: true, filter: true},
      {headerName: 'ID', field: 'id', sortable: true, filter: true},
      {headerName: 'Title', field: 'title', sortable: true, filter: true},
      {headerName: 'Url', field: 'url', sortable: true, filter: true}
  ];
    rowData: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.rowData = this.http.get('https://jsonplaceholder.typicode.com/photos');
    }
}