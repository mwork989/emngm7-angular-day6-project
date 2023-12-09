import { Component } from '@angular/core';
import { IStockDetails } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-records3',
  templateUrl: './stock-records3.component.html',
  styleUrls: ['./stock-records3.component.css'],
  providers:[StockService]
})
export class StockRecords3Component {
  public stock3Records: IStockDetails[];
  constructor(public stockService:StockService) {
    this.stock3Records = [];
  }

  public ngOnInit(): void {
   
      this.stock3Records = this.stockService.getStocks().slice(5,this.stockService.getStocks().length);
    
  
  }
}
