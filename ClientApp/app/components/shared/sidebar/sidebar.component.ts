import { Component, OnInit, Input } from '@angular/core';
import { SidebarType } from './sidebar.type';
import { SidebarService } from './sidebar.service';


@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    sidebarMenu: SidebarType;
    private _lang: string;

    @Input() set lang(name: string) {
        this._lang = name;
    }
    get lang(): string {
        return this._lang;
    }

    constructor(private sidebarService: SidebarService) {
    }

    ngOnInit(): void {
        this.sidebarService.getSidebarMenu(this.lang)
            .then(menu => this.sidebarMenu = menu);        
    }
}
