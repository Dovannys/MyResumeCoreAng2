import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { PortfolioType } from './portfolio.type';

@Component({
    selector: 'home-portfolio',
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {
    portfolio: PortfolioType;
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
        this.sidebarService.getPortfolio(this.lang)
            .then(ex => this.portfolio = ex);
    }
}