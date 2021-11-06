import { BrowserModule} from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SidebarService } from './shared/sidebar/sidebar.service';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { JournalComponent } from './journal/journal.component';
import { ContactComponent } from './contact/contact.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    PortfolioComponent,
    JournalComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    NgxPageScrollCoreModule,
    RouterModule.forRoot([
      { path: 'home/:id', component: HomeComponent },
      { path: '', redirectTo: 'home/en', pathMatch: 'full' },      
      { path: '**', redirectTo: 'home/en' },
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
