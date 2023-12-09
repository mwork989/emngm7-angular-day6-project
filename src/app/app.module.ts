import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { StockRecords1Component } from './components/stock-records1/stock-records1.component';
import { StockRecords2Component } from './components/stock-records2/stock-records2.component';
import { StockRecords3Component } from './components/stock-records3/stock-records3.component';
import { StockRecords4Component } from './components/stock-records4/stock-records4.component';
import { HighlightDirective } from './common/highlight.directive';
import { SearchPipe } from './shared/search.pipe';
import { ParenthesisPipe } from './shared/parenthesis.pipe';
import { StockService } from './services/stock.service';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    StockRecords1Component,
    StockRecords2Component,
    StockRecords3Component,
    StockRecords4Component,
    HighlightDirective,
    SearchPipe,
    ParenthesisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
