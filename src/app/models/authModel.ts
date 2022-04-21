import { Data } from './../../../node_modules/ngx-bootstrap/positioning/models/index.d';
export class IAuthModel{

      IsAuthenticated :boolean;
      Email :string;
     Roles: [string] ;
      Token  :string;
      ExpiresOn:Data;
}