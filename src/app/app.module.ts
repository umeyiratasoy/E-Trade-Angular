import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './base/base.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { DeleteDirective } from './directives/admin/delete.directive';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './dialogs/file-upload-dialog/file-upload-dialog.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './ui/components/login/login.component';
import { LoginModule } from './ui/components/login/login.module';
import { FacebookLoginProvider, GoogleLoginProvider, GoogleSigninButtonDirective, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { HttpErrorHandlerInterrceptorService } from './services/common/http-error-handler-interrceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule, UiModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("accessToken"),
        allowedDomains:["localhost:7130"]
      }
    }),
    SocialLoginModule
    
  ],
  providers: [
    {provide:"baseUrl", useValue : "https://localhost:7130/api", multi : true},
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("") // googleclientid
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("") //facebookloginappid
          }
        ],
        onError: err => console.log(err)
      } as SocialAuthServiceConfig
    },
    {provide:HTTP_INTERCEPTORS, useClass:HttpErrorHandlerInterrceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
