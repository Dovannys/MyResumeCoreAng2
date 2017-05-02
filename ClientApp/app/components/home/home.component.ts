import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    lang: string;

    constructor(private router: ActivatedRoute) {
    }

    ngOnInit() {
        this.lang = this.router.snapshot.params['id'];
        if (this.lang != "es") {
            this.lang = "en";
        }
    }
}
