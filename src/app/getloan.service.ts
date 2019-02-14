import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnvironmentContext } from './model/EnvironVal.model'
import{Loandetails} from './model/loandetails.model'
@Injectable()
export class GetloanService {

  constructor(private http: HttpClient) { }
 unknownApiErrorMessage = 'An error was returned from the API in an unexpected format';
getLoanDetails(): Observable<any> {

    const headers = new HttpHeaders()
      .set('Authorization', '')//environmentContext.authorizationKey'')
      .append('RequestContext','Test')
      .append('Content-Type', 'application/json');

    return this.http.get("http://localhost:49495/api/Loan/V1/Getloan"
      //`${environmentContext.gatewayUrl}/`
      //, { headers }
    ).pipe(
      map((response: any) => response)
      ,catchError(this._handleError))
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || this.unknownApiErrorMessage;
    return Observable.throw(errorMsg);
  }

}
