import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RoutingModule} from './routing/routing.module';
import {MatToolbarModule} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MyFormComponent } from './my-form/my-form.component';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material';

import { DialogComponent } from './dialog/dialog.component';
import { MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MatTooltipModule } from '@angular/material';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material';

import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MyFormComponent,
    DialogComponent,
    MyDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
  ],
  imports: [
    /* Angular Material Modules */
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
