import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { JournalType } from './journal.type';

@Component({
    selector: 'home-journal',
    templateUrl: './journal.component.html'
})
export class JournalComponent implements OnInit {
    journal: JournalType;
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
      this.sidebarService.getJournal(this.lang)
        .subscribe((ex: JournalType) => this.journal = ex);
    }
}
