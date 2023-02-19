/*import { Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  title = 'frontEnd';
  public columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price' }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;
 
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
 
  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }
  // public columnDefs: ColDef[] = [
  //   { field: 'make'},
  //   { field: 'model'},
  //   { field: 'price' }
  // ];
  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
 
  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  // constructor() { }

  ngOnInit(): void {
  }

}
*/



/*

import { Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable ,throwError} from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { AgList } from 'ag-grid-community/dist/lib/widgets/agList';
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  companyList:any;
  title = 'frontEnd';
  public columnDefs: ColDef[] = [
    { field: 'changedBy'},
    { field: 'changedDate'},
    { field: 'companyID' },
    { field: 'companyName'},
    { field: 'createdBy'},
    { field: 'createdDate' },
    { field: 'id' }

  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  // Data that gets displayed in the grid
  public rowData!: Observable<any>;
 
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
 
  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    
    this.rowData=this.http.get<any[]>('http://localhost:8081/searchme');
   
    // this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  // public columnDefs: ColDef[] = [
  //   { field: 'make'},
  //   { field: 'model'},
  //   { field: 'price' }
  // ];
  // Example of consuming Grid Event

  onCellClicked( e: CellClickedEvent): void
   {
      console.log('cellClicked', e);
  }this.rowData=this.http.get<any[]>('http://localhost:8081/searchMedicines');
    this.http.get<any[]>('http://localhost:8081/searchMedicines').subscribe(data=>console.log(data));
 
  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  // constructor() { }

  ngOnInit(): void {
  }

}

*/




import { Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable ,throwError} from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { AgList } from 'ag-grid-community/dist/lib/widgets/agList';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  companyList:any;
  options: string[] = [];
  
  title = 'frontEnd';
  public columnDefs: ColDef[] = [
    
    { field: 'id', width:10},
    { field: 'name', width:115},
    { field: 'batch_no' , width:115},
    { field: 'Expiry_Date', width:180},
    { field: 'quantity', width:120},
    { field: 'Manufacturing_Date' , width:180},    
    { field: 'retail_Rate_Strip', width:155},
    { field: 'company_Name', width:150},
    { field: 'tablet_Per_Strip', width:150},
    { field: 'free_Quantity' , width:135},
    { field: 'retail_Per_Tablet' , width:155},
    { field: 'payment'},
    { field: 'bill_No'},
    { field: 'purchased_On' },
    { field: 'stock_Point' , width:150},
    { field: 'wholesale_Rate' , width:150},
    { field: 'remarks', width:110},
    { field: 'payment_On_Purchase' }

  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  // Data that gets displayed in the grid
  public rowData!: Observable<any>;
 
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
 
  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    
    this.rowData=this.http.get<any[]>('http://localhost:8081/searchMedicines');
    this.http.get<any[]>('http://localhost:8081/searchMedicines').subscribe(data=>
    {
      console.log(data);
    }
    
    );
    // console.log(this.http.get('http://localhost:8081/searchMedicines'));
    // console.log(this.rowData);
   
    // this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
    //
  }

 

  onCellClicked( e: CellClickedEvent): void
   {
      console.log('cellClicked', e);
  }
 
  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  // constructor() { }

  ngOnInit(): void {
  }

}

