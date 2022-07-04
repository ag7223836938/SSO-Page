// export const loginConfig ={
//           auth: {
//         clientId: 'bca13d61-fef6-4b80-94d7-214398d7fc3a',
//         redirectUri: 'http://localhost:4200'
//       }
//     };
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
 export function MSALInstanceFactory(): IPublicClientApplication {
    return new PublicClientApplication({
      auth: {
        clientId: 'bca13d61-fef6-4b80-94d7-214398d7fc3a',
        redirectUri: 'http://localhost:4200'
      }
    });
  }
  