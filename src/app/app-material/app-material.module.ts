import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule, MatToolbarModule, MatStepperModule, MatInputModule, MatButtonModule,MatSelectModule,MatNativeDateModule,MatCheckboxModule, MatPaginatorModule, MatSortModule, MatDialogModule} from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatStepperModule,
    MatNativeDateModule,
    MatIconModule, 
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports:[
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatStepperModule,
    MatNativeDateModule,
    MatIconModule, 
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class AppMaterialModule { }
