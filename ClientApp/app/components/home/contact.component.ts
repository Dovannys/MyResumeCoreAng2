import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { ContactType } from './contact.type';

@Component({
    selector: 'home-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
    contact: ContactType;
    private year: string;
    public contactForm = this.fb.group({
        name: ["", Validators.required],
        email: ["", Validators.required],
        message: ["", Validators.required]
    });
    private _lang: string;

    @Input() set lang(name: string) {
        this._lang = name;
    }
    get lang(): string {
        return this._lang;
    }

    constructor(private sidebarService: SidebarService, public fb: FormBuilder) {
    }

    ngOnInit() {
        this.sidebarService.getContact(this.lang)
            .then(ex => this.contact = ex);
        var current = new Date().getFullYear();
        this.year = current.toString();       
    }

    doMessage(event) {
        console.log(event);
        console.log(this.contactForm.value);

        try {
            //TODO Enviar mensaje a través de un servicio
            let name = this.contactForm.controls.name.value;
            let email = this.contactForm.controls.email.value;
            let message = this.contactForm.controls.message.value;
            //console.log(name);

            this.sidebarService.sendMessage(name, email, message);

            //Emito un aviso al usuario
            alert(this.contact.textSendedOk);
        }
        catch (e) {
            alert(e.message);
        }

        //Limpiar los campos en la pantalla
        (<HTMLInputElement>document.getElementById("name")).value = '';
        (<HTMLInputElement>document.getElementById("email")).value = '';
        (<HTMLInputElement>document.getElementById("message")).value = '';
    }
}