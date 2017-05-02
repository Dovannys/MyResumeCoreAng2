import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { AboutComponent } from './components/home/about.component';
import { HeaderComponent } from './components/home/header.component';
import { SidebarService } from './components/shared/sidebar/sidebar.service';


@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        SidebarComponent,
        AboutComponent,
        HeaderComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home/en', pathMatch: 'full' },
            { path: 'home/:id', component: HomeComponent },
            { path: '**', redirectTo: 'home/en' }
        ])
    ],
    providers: [SidebarService]
})
export class AppModule {
}
