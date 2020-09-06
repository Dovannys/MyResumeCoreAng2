import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { ContactType } from './contact.type';

@Component({
    selector: 'home-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  contact: ContactType;
  public year: string;
  public contactForm: FormGroup;
    private _lang: string;

    @Input() set lang(name: string) {
        this._lang = name;
    }
    get lang(): string {
        return this._lang;
    }

    constructor(private sidebarService: SidebarService, private fb: FormBuilder) {
    }

    ngOnInit() {
      this.sidebarService.getContact(this.lang)
        .subscribe((ex: ContactType) => this.contact = ex);
        const current = new Date().getFullYear();
      this.year = current.toString();

      this.contactForm = this.fb.group({
        name: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        message: new FormControl("", Validators.required)
      });
    }

    doMessage() {
        //console.log(event);
        //console.log(this.contactForm.value);

        try {
            // Enviar mensaje a través de un servicio
            const name = this.contactForm.controls.name.value;
            const email = this.contactForm.controls.email.value;
            const message = this.contactForm.controls.message.value;
            //console.log(name);

          this.sidebarService.sendMessage(name, email, message)
            .subscribe(ex => {
              (ex === "OK") ? alert(this.contact.textSendedOk) : alert(ex);
              //Limpiar los campos en la pantalla
              this.contactForm.setValue({
                name: "",
                email: "",
                message: ""
              });
            });
        }
        catch (e) {
            alert(e.message);
        }
    }
}
