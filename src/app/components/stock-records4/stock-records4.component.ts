import { Component } from '@angular/core';
import { IStockDetails } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-records4',
  templateUrl: './stock-records4.component.html',
  styleUrls: ['./stock-records4.component.css']
})
export class StockRecords4Component {
  public stock4Records: IStockDetails[];
  constructor(public stockService:StockService) {
    this.stock4Records = [];
  }

  public ngOnInit(): void {
    this.stockService.getStocksFromJSONdataServer().subscribe((data:any)=>{
      this.stock4Records = data;
    })
  }
}
