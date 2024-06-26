import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { CreateUser } from 'src/app/contracts/users/create_user';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/common/models/user.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/ui/custom-toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  constructor(private formBuiler:UntypedFormBuilder, private userService:UserService,
    private toastrService:CustomToastrService, spinner:NgxSpinnerService
  ) {
    super(spinner)
   }

  frm:UntypedFormGroup;
  ngOnInit(): void {

    this.frm = this.formBuiler.group({
      nameSurname:["", [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      username:["",[Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      email:["",[Validators.required, Validators.maxLength(250), Validators.email]],
      password:["", [Validators.required]],
      passwordConfirm:["",[Validators.required]],
    }, {
      validators: (group: AbstractControl): ValidationErrors | null => {
        let sifre = group.get("password").value;
        let sifreTekrar = group.get("passwordConfirm").value;
        return sifre === sifreTekrar ? null : { notSame: true };
      }})
  }

  get component() {
    return this.frm.controls;
  }

  submitted:boolean=false;

  async onSubmit(user:User){
    this.submitted = true;
    if(this.frm.invalid)
      return;
    const result: CreateUser =  await this.userService.create(user);
    if ( result.succeeded) 
      this.toastrService.message(result.message, "Kullanıcı kaydı başarılı", {
        messageType:ToastrMessageType.Success,
        position : ToastrPosition.BottomRight
    })
    else  
    this.toastrService.message(result.message, "Hata", {
      messageType:ToastrMessageType.Error,
      position : ToastrPosition.BottomRight
    })
  }

}
