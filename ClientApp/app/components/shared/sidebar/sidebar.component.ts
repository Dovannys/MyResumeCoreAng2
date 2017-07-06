import { Component, OnInit, Input, Inject} from '@angular/core';
import { SidebarType } from './sidebar.type';
import { SidebarService } from './sidebar.service';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { DOCUMENT } from "@angular/platform-browser";


@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    sidebarMenu: SidebarType;
    private _lang: string;
    withResp: boolean;

    @Input() set lang(name: string) {
        this._lang = name;
    }
    get lang(): string {
        return this._lang;
    }

    constructor(private sidebarService: SidebarService, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
    }

    responsiveSidebar() {
        if (window.outerWidth < 784) {
            (<HTMLBodyElement>document.getElementById("body")).classList.add("icon-nav");
            this.withResp = true;
        }
        else {
            (<HTMLBodyElement>document.getElementById("body")).classList.remove("icon-nav");
            this.withResp = false;
        }
    }

    ngOnInit(): void {
        this.sidebarService.getSidebarMenu(this.lang)
            .then(menu => this.sidebarMenu = menu);
        this.responsiveSidebar();
    }

    onResize(event) {
        this.responsiveSidebar();
    }

    scrollTo(selector, parentSelector) {
        //console.log("selector: "+selector+" parentSelector: "+parentSelector);

        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, selector);
        this.pageScrollService.start(pageScrollInstance);
    }
}
