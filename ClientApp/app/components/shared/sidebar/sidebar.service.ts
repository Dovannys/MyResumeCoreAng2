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

    getAbout(id: string) {
        return this.http.get('api/LangAPI/about/' + id)
            .map((response: Response) => response.json())
            .toPromise();
    }

    getEducation(id: string) {
        return this.http.get('api/LangAPI/education/' + id)
            .map((response: Response) => response.json())
            .toPromise();
    }

    getExperience(id: string) {
        return this.http.get('api/LangAPI/experience/' + id)
            .map((response: Response) => response.json())
            .toPromise();
    }

    getPortfolio(id: string) {
        return this.http.get('api/LangAPI/portfolio/' + id)
            .map((response: Response) => response.json())
            .toPromise();
    }

    getJournal(id: string) {
        return this.http.get('api/LangAPI/journal/' + id)
            .map((response: Response) => response.json())
            .toPromise();
    }

    getContact(id: string) {
        return this.http.get('api/LangAPI/contact/' + id)
            .map((response: Response) => response.json())
            .toPromise();
    }

    sendMessage(name: string, email: string, message: string) {
        return this.http.get('api/EmailAPI/sendmessage?name=' + name + '&email=' + email + '&message=' + message)
            .map((response: Response) => response.json())
            .toPromise();
    }
}