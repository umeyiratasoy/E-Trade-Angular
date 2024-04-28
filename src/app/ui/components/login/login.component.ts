import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AuthService } from 'src/app/services/common/auth.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { UserService } from 'src/app/services/common/models/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
 
  constructor( private userService:UserService, spinner:NgxSpinnerService,
    private authService:AuthService,private activatedRoute:ActivatedRoute, private router:Router,private socialAuthService: SocialAuthService, 
    private httpClientService:HttpClientService
  ) { 
    super(spinner)
    socialAuthService.authState.subscribe( async(user:SocialUser) => {

      console.log(user)
      this.showSpinner(SpinnerType.BallAtom);
      await userService.googleLogin(user, () => {
        authService.identityCheck();
        this.hideSpinner(SpinnerType.BallAtom)
      });
      
  }); 
  }
 
  ngOnInit(): void {
  }

  async login(usernameOrEmail:string, password:string) {
     this.showSpinner(SpinnerType.BallAtom); 
     await this.userService.login(usernameOrEmail,password, () => {
      this.authService.identityCheck();

      this.activatedRoute.queryParams.subscribe(params => {
        const returnUrl:string = params["returnUrl"];
        if(returnUrl)
          this.router.navigate([returnUrl]);
      })
      this.hideSpinner(SpinnerType.BallAtom)
     });
  }

}
