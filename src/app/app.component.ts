// import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';
  public columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price' }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable:true
  };
  
  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;
 
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
 
  constructor(private http: HttpClient) {}

  
  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
 
  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
