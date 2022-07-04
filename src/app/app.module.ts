import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MSALInstanceFactory } from './common/loginConfig';

// export function MSALInstanceFactory():IPublicClientApplication{
//   return new PublicClientApplication({
//     auth:{
//       clientId:'a3cd71a7-9afe-4d69-ba9c-af4fc7088dba',
//       redirectUri: 'http://localhost:4200'
//     }
//   })
// }

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
   {
     provide: MSAL_INSTANCE,
     useFactory: MSALInstanceFactory
   },
   MsalService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
