import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes  } from '@angular/router'; 
import { RouterModule  } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ReadmoreComponent } from './readmore/readmore.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/* library.add(faChevronRight);
library.add(faChevronDown)
 */

 const appRoutes: Routes = [
  { path: 'partner', component: AppComponent}
  // { path: 'partner/:id', component: AppComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    ReadmoreComponent,
    CarouselComponent,
     
  ],
  imports: [
    HttpClientModule,  
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
