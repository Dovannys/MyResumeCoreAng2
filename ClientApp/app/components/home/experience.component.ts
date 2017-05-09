import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { ExperienceType } from './experience.type';

@Component({
    selector: 'home-experience',
    templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
    experience: ExperienceType;
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
        this.sidebarService.getExperience(this.lang)
            .then(ex => this.experience = ex);
    }
}