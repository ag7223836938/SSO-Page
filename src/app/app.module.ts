import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginConfig } from './common/loginConfig';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
   //{
     // provide: MSAL_INSTANCE,
    //  useFactory: MSALInstanceFactory
  //  },
  //  MsalService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
