import { Injectable } from '@angular/core';
//import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as FileSaver from 'file-saver';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SidebarService {
    constructor(private http: HttpClient) {

    }

    getSidebarMenu(id: string) {
        return this.http.get('api/LangAPI/sidebar/' + id);
            //.map((response: Response) => response.json())
            //.toPromise();
    }

    getHeader(id: string) {
        return this.http.get('api/LangAPI/header/' + id);
            //.map((response: Response) => response.json())
            //.toPromise();
    }

    getAbout(id: string) {
        return this.http.get('api/LangAPI/about/' + id);
            //.map((response: Response) => response.json())
            //.toPromise();
    }

    getEducation(id: string) {
        return this.http.get('api/LangAPI/education/' + id);
            //.map((response: Response) => response.json())
            //.toPromise();
    }

    getExperience(id: string) {
        return this.http.get('api/LangAPI/experience/' + id);
            //.map((response: Response) => response.json())
            //.toPromise();
    }

    getPortfolio(id: string) {
        return this.http.get('api/LangAPI/portfolio/' + id);
            //.map((response: Response) => response.json())
            //.toPromise();
    }

    getJournal(id: string) {
        return this.http.get('api/LangAPI/journal/' + id);
            //.map((response: Response) => response.json())
            //.toPromise();
    }

    getContact(id: string) {
        return this.http.get('api/LangAPI/contact/' + id);
            //.map((response: Response) => response.json())
            //.toPromise();
    }

    getDownload(id: string) {
        return this.http.get('api/LangAPI/download/' + id);
            //.map((response: Response) => response.json())
            //.toPromise();
    }

    getPdf(id: string, fileName: string) {
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/pdf');
        this.http.get('api/LangAPI/getpdf/' + id, { headers: headers, responseType: "blob" })
            .subscribe((data) => {
                console.log(data);
                const blob = new Blob([data], { type: "application/pdf" });
                FileSaver.saveAs(blob, fileName);
            });                    
    }    

    sendMessage(name: string, email: string, message: string) {
        return this.http.get('api/EmailAPI/sendmessage?name=' + name + '&email=' + email + '&message=' + message);
            //.map((response: Response) => response.json())
            //.toPromise();
    }
}
