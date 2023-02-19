import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl,FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { MatAutocomplete } from '@angular/material/autocomplete';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class POSComponent implements OnInit 
{
  @ViewChild(MatAutocomplete) auto!: MatAutocomplete;
  
  constructor(private cartService: CartService, )
   {  
     this.filteredOptions = of(this.options)
   }  

  myControl = new FormControl('');
  myNumber=new FormControl();
  Discount=new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  medicineList:Product[]=[];
  cart:Product[]=[];
  
  ngOnInit() {

    this.cart = [];
   
    this.cartService.getAllMedicines().subscribe(data=>
      {
        data.forEach(product=>
          {
            const newProduct: Product = {
              name: product.name,
              quantity: product.quantity,
              rate: product.retail_Rate_Strip,
              
            };
            this.options.push(product.name);
            this.medicineList.push(product.name,product.quantity,product.retail_Rate_Strip);
            this.medicineList.push(newProduct);
          });
            
           
      }
      );
    
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),

    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
    
  }

  Add(event:any) {
    event.preventDefault();
    console.log("calling add");
    console.log("comig from add method:"+this.medicineList)
    const selectedMedicine = this.medicineList.find(
      (medicine) => medicine.name == this.myControl.value
    );
    if (selectedMedicine) {
      console.log("selected medicine"+selectedMedicine);
      this.cart.push({
        name: selectedMedicine.name,
        quantity: this.myNumber.value,
        rate: selectedMedicine.rate,
      });
      console.log(this.cart);
      console.log("quantity from form control: "+this.myNumber.value);
      this.myControl=new FormControl('');
      this.myNumber=new FormControl();
    
  }
}
Sale(event:any)
{
  event.preventDefault();
  this.cartService.postItem(this.cart).subscribe();
}

}

