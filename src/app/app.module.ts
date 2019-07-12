import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {FormsModule} from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    DataTablesModule,
    ToastrModule.forRoot(),
    Ng2GoogleChartsModule,
    AppMaterialModule,
  ],
  entryComponents: [
  ],
  providers: [
    { provide: LocationStrategy,
     useClass: HashLocationStrategy 
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
