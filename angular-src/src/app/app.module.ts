import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { ReveldataService } from './services/reveldata.service';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { DataTablesModule } from 'angular-datatables';
import { PartypackComponent } from './components/partypack/partypack.component';

const appRoutes: Routes = [
  {path: 'display', component: DisplayComponent},
  {path: '', component: PartypackComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NavbarComponent,
    PartypackComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxDatatableModule,
    // DataTablesModule
  ],
  providers: [ReveldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
