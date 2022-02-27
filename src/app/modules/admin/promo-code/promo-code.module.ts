import { Injectable, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PromoCodeRoutingModule } from "./promo-code-routing.module";
import { PromoCodeService } from './promo-code.service';

import * as comp from "./index";
const COMP = [comp.PromoCodeComponent, comp.ListComponent, comp.CreateComponent];

// @Injectable({
//   providedIn: 'root',
//  })

@NgModule({
  declarations: [...COMP],
  imports: [
    CommonModule,
    PromoCodeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    SharedModule
  ],
  providers: [
    PromoCodeService
   ],
})
export class PromoCodeModule {}
