import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { EducationType } from './education.type';

@Component({
    selector: 'home-education',
    templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {
    education: EducationType;
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
      this.sidebarService.getEducation(this.lang)
        .subscribe((edu: EducationType) => this.education = edu);
    }
}
