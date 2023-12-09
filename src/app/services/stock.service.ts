import { Injectable } from '@angular/core';
import { IStockDetails } from '../models/stock.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class StockService { 

  constructor(public httpClientService:HttpClient) { }

  public getStocks():IStockDetails[]{
    return [
      {
        id: 11,
        stockName: 'B1ioScrip, Inc.',
        stockMarketCap: 306.888888888888809,
        stockMSector: 'Health Care',
        releaseDate: '01/06/2021',
        symbol: 'BIOS',
      },
      {
        id: 22,
        stockName: 'RiceBran Technologies',
        stockMarketCap: 9.62,
        stockMSector: 'Consumer Non-Durables',
        releaseDate: '11/05/2021',
        symbol: 'RIBT',
      },
      {
        id: 3,
        stockName: 'John Hancock Investors Trust',
        stockMarketCap: 152.46,
        stockMSector: 'Health Care',
        releaseDate: '12/05/2021',
        symbol: 'JHI',
      },
      {
        id: 4,
        stockName: 'Yatra Online, Inc.',
        stockMarketCap: 398.74,
        stockMSector: 'Consumer Services',
        releaseDate: '10/03/2021',
        symbol: 'YTRA',
      },
      {
        id: 5,
        stockName: 'Restaurant Brands International Inc.',
        stockMarketCap: 14.34,
        stockMSector: 'Consumer Services',
        releaseDate: '06/07/2021',
        symbol: 'QSR',
      },
      {
        id: 6,
        stockName: 'Restaurant2 Brands International Inc.',
        stockMarketCap: 24.34,
        stockMSector: '2Consumer Services',
        releaseDate: '06/07/2021',
        symbol: 'RSQ',
      }
    ];
  }

  public getStocksFromJSONdataServer():Observable<any>{
    return this.httpClientService.get('http://localhost:3000/stocks')
  }
}
