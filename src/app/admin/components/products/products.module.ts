import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {MatInputModule} from '@angular/material/input';  
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteDirective } from 'src/app/directives/admin/delete.directive';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { FileUploadComponent } from 'src/app/services/common/file-upload/file-upload.component';
import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';
import { DialogModule } from 'src/app/dialogs/dialog.module';




@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent,
    DeleteDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: ProductsComponent}
    ]),
    NgxSpinnerModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    DialogModule,
    FileUploadModule
  ]
})
export class ProductsModule { }
