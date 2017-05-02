import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { HeaderType } from './header.type';

@Component({
    selector: 'home-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    header: HeaderType;
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
        this.sidebarService.getHeader(this.lang)
            .then(head => this.header = head);
    }
}