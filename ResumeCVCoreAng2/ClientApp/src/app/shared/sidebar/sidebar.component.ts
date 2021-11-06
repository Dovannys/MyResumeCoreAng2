import { Component, OnInit, Input, Inject } from '@angular/core';
import { SidebarType, DownloadType } from './sidebar.type';
import { SidebarService } from './sidebar.service';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from "@angular/common";


@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    sidebarMenu: SidebarType;
    private _lang: string;
    withResp: boolean;
    fileUrl;

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
        .subscribe((menu: SidebarType) => this.sidebarMenu = menu);
        this.responsiveSidebar();                
    }

    onResize(event) {
        this.responsiveSidebar();
    }

    doDownload() {
        
        console.log("Dentro de la funcion");
        this.sidebarService.getPdf(this.lang, "Dovannys_Hernández.pdf");                
    }    

    scrollTo(selector) {
        //console.log("selector: "+selector+");

      //let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, selector);
      //this.pageScrollService.start(pageScrollInstance);
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: selector
      });
    }
}
