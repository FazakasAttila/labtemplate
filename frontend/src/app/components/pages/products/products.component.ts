import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import {DataListModule} from 'primeng/primeng';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

products: Products[];


  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.get('api/products/').subscribe(res => {
          this.products = res;
        });
  }


}

interface Products{
  id:number;
  Price: number;
}
