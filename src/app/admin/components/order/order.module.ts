import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ListComponent } from './list/list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogModule } from 'src/app/dialogs/dialog.module';
import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';
import { DeleteDirective } from 'src/app/directives/admin/delete.directive';
import { DeleteDirectiveModule } from 'src/app/directives/admin/delete.directive.module';



@NgModule({
  declarations: [
    OrderComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: OrderComponent}
    ])
    ,
    NgxSpinnerModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    DialogModule,
    DeleteDirectiveModule
  ]
})
export class OrderModule { }
