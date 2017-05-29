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

        let name = this.contactForm.controls.name.value;
        console.log(name);
    }
}