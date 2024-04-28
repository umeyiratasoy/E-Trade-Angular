import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { User } from 'src/app/entities/user';
import { CreateUser } from 'src/app/contracts/users/create_user';
import { Observable, firstValueFrom } from 'rxjs';
import { Token } from '@angular/compiler';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { TokenResponse } from 'src/app/contracts/token/tokenResponse';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService: HttpClientService,
    private toastrService:CustomToastrService
  ) { }

   async create(user:User):Promise<CreateUser> {
    const observable : Observable<CreateUser | User> =  this.httpClientService.post<CreateUser | User>({
      controller:"users"
    },user);
    return await firstValueFrom(observable) as CreateUser;
  }

  async login(usernameOrEmail:string, password:string, callBackFunction? : () => void): Promise<any> {
    const observable : Observable<any | TokenResponse> =  this.httpClientService.post<any | TokenResponse>({
      controller:"users",
      action:"login"
    }, {usernameOrEmail, password})


    const tokenResponse : TokenResponse  = await firstValueFrom(observable) as TokenResponse; 


    if(tokenResponse) {
      localStorage.setItem("accessToken", tokenResponse.token.accessToken);


      this.toastrService.message("Kullanıcı Girişi Başarılı","Giriş Başarılı", {
        messageType: ToastrMessageType.Success,
        position:ToastrPosition.BottomRight
      })
    }
      
    callBackFunction();
  }

  async googleLogin(user:SocialUser, callBackFunction?: () => void) : Promise<any> {
      const observable: Observable<SocialUser |TokenResponse> =     this.httpClientService.post<SocialUser |TokenResponse> ({
      action:"google-login",
      controller:"users"
    }, user);

    const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse;
    if(tokenResponse)
      localStorage.setItem("accessToken", tokenResponse.token.accessToken);

    this.toastrService.message("Google üzerinden giriş başarılı bir şekilde sağlanmıştır.","Giriş Başarılı", {
      messageType: ToastrMessageType.Success,
      position:ToastrPosition.BottomRight
    });
    callBackFunction();
  }

  async facebookLogin(user:SocialUser, callBackFunction?: () => void) : Promise<any> {
    const observable: Observable<SocialUser | TokenResponse> =     this.httpClientService.post<SocialUser |TokenResponse> ({
    action:"facebook-login",
    controller:"users"
  }, user);

  const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse;
  if(tokenResponse)
    localStorage.setItem("accessToken", tokenResponse.token.accessToken);

  this.toastrService.message("Facebook üzerinden  giriş başarılı bir şekilde sağlanmıştır.","Giriş Başarılı", {
    messageType: ToastrMessageType.Success,
    position:ToastrPosition.BottomRight
  });
  callBackFunction();
}

  


  


}
