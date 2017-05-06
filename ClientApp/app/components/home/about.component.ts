import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { AboutType } from './about.type';

@Component({
    selector: 'home-about',
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
    about: AboutType;
    private _lang: string;

    @Input() set lang(name: string) {
        this._lang = name;
    }
    get lang(): string {
        return this._lang;
    }

    constructor(private sidebarService: SidebarService) {
    }

    ngOnInit() {
        this.sidebarService.getAbout(this.lang)
            .then(about => this.about = about);
    }
}
