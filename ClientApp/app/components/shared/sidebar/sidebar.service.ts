import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { SidebarType } from '../sidebar.type';

@Injectable()
export class SidebarService {
    constructor(private http: Http) {

    }

    getSidebarMenu(id: string) {
        return this.http.get('api/LangAPI/sidebar/' + id)
            .map((response: Response) => /*<SidebarType>*/response.json())
            .toPromise();
    }
}