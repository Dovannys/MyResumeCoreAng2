import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SidebarService {
    constructor(private http: Http) {

    }

    getSidebarMenu(id: string) {
        return this.http.get('api/LangAPI/sidebar/' + id)
            .map((response: Response) => response.json())
            .toPromise();
    }

    getHeader(id: string) {
        return this.http.get('api/LangAPI/header/' + id)
            .map((response: Response) => response.json())
            .toPromise();
    }
}