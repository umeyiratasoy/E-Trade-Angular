import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { Observable, catchError, of } from 'rxjs';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../ui/custom-toastr.service';
import { UserAuthService } from './models/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerInterrceptorService implements HttpInterceptor {

  constructor(private toastrService:CustomToastrService, private userAuthService:UserAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(error => {
      switch (error.status){
        case HttpStatusCode.Unauthorized:
          this.toastrService.message("Bu işlemi yapmaya yetkiniz bulunmamaktadır!", "Yetkisiz işlem!",{
            messageType : ToastrMessageType.Warning,
            position: ToastrPosition.BottomRight
          });
          this.userAuthService.refreshTokenLogin(localStorage.getItem("refreshToken")).then( data => {

          });


        break;
        case HttpStatusCode.InternalServerError:
          this.toastrService.message("Sunucuya erişilmiyor!", "Sunucu Hatası!",{
            messageType : ToastrMessageType.Warning,
            position: ToastrPosition.BottomRight
          })
        break;
        case HttpStatusCode.BadRequest:
          this.toastrService.message("Geçersiz istek yapıldı!", "Geçersiz İstek!",{
            messageType : ToastrMessageType.Warning,
            position: ToastrPosition.BottomRight
          })
        break;
        case HttpStatusCode.NotFound:
          this.toastrService.message("Sayfa bulunamadı!", "Sayfa Bulunamadı!",{
            messageType : ToastrMessageType.Warning,
            position: ToastrPosition.BottomRight
          })
        break;
        default:
          this.toastrService.message("Beklenmeyen bir hata meydana gelmiştir!", "Hata",{
            messageType : ToastrMessageType.Warning,
            position: ToastrPosition.BottomRight
          })
        break;

      }



      return of(error); 
    }))
  }
}
