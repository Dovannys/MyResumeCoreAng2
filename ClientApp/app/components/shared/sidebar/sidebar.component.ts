
import { Component, OnInit, Input } from '@angular/core';
import { SidebarType } from '../sidebar.type';
import { SidebarService } from './sidebar.service';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
    @Input() sidebarMenu: SidebarType;
    constructor(private sidebarService: SidebarService) {
    }

    ngOnInit(): void {
        this.sidebarService.getSidebarMenu("es")
            .then(menu => this.sidebarMenu = menu);
    }
}
