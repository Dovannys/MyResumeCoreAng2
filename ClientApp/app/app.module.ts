import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { AboutComponent } from './components/home/about.component';
import { HeaderComponent } from './components/home/header.component';
import { EducationComponent } from './components/home/education.component';
import { ExperienceComponent } from './components/home/experience.component';
import { PortfolioComponent } from './components/home/portfolio.component';
import { JournalComponent } from './components/home/journal.component';
import { ContactComponent } from './components/home/contact.component';
import { SidebarService } from './components/shared/sidebar/sidebar.service';
import { Ng2ScrollableModule } from 'ng2-scrollable';


@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        SidebarComponent,
        AboutComponent,
        EducationComponent,
        ExperienceComponent,
        PortfolioComponent,
        JournalComponent,
        ContactComponent,
        HeaderComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home/en', pathMatch: 'full' },
            { path: 'home/:id', component: HomeComponent },
            { path: '**', redirectTo: 'home/en' }
        ]),
        ReactiveFormsModule,
        HttpModule,
        Ng2ScrollableModule
    ],
    providers: [SidebarService]
})
export class AppModule {
}
