import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AgmCoreModule } from "@agm/core";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

import { DisputeManagerRoutingModule } from "./dispute-manager-routing.module";

import { DisputeManagerService } from './dispute-manager.service';

import * as comp from "./index";

const COMP = [
  comp.DisputeManagerComponent,
  comp.CreateComponent,
  comp.ListComponent,
];

@NgModule({
  declarations: [...COMP],
  imports: [
    CommonModule,
    DisputeManagerRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSelectModule,
    AgmCoreModule,
    MatDatepickerModule,
    MatMenuModule,
    MatDialogModule,
    SharedModule
  ],
  providers: [
    DisputeManagerService
   ],
})
export class DeliveryAgentModule {}
