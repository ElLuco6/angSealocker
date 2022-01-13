import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes  } from '@angular/router'; 
import { RouterModule  } from '@angular/router';


 const appRoutes: Routes = [
  { path: 'partner', component: AppComponent}
  // { path: 'partner/:id', component: AppComponent}
]; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,  
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
