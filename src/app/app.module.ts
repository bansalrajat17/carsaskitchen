import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon/';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { IgxAvatarModule, IgxButtonModule, IgxCardModule, IgxRippleModule, IgxTabsModule } from 'igniteui-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 

import { AppComponent } from './app.component';
import { AccountComponent } from './shared/auth/account/account.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { SignupComponent } from './shared/auth/signup/signup.component';
import { AboutUsComponent } from './site/main/about-us/about-us.component';
import { ComplianceComponent } from './site/main/compliance/compliance.component';
import { FaqComponent } from './site/main/faq/faq.component';
import { FooterComponent } from './site/main/footer/footer.component';
import { GetstartedFormComponent } from './site/main/getstarted-form/getstarted-form.component';
import { GstComponent } from './site/main/gst/gst.component';
import { HeaderComponent } from './site/main/header/header.component';
import { HomeComponent } from './site/main/home/home.component';
import { ItrComponent } from './site/main/itr/itr.component';
import { MainComponent } from './site/main/main.component';
import { MaincarouselComponent } from './site/main/maincarousel/maincarousel.component';
import { NavigationBarComponent } from './site/main/navigation-bar/navigation-bar.component';
import { TokenInterceptorService } from './site/service/interceptors/TokenInterceptorService';
import { ServicesComponent } from './site/services/services.component';
import { DashboardComponent } from './webapp/dashboard/dashboard.component';
import { LeftsectionComponent } from './webapp/dashboard/leftsection/leftsection.component';
import { InnerheaderComponent } from './webapp/dashboard/rightsection/innerheader/innerheader.component';
import { RightsectionComponent } from './webapp/dashboard/rightsection/rightsection.component';
import { UserinvoicesComponent } from './webapp/dashboard/rightsection/userinvoices/userinvoices.component';
import { UserprofileComponent } from './webapp/dashboard/rightsection/userprofile/userprofile.component';
import { ServiceComponent } from './site/main/service/service.component';
import { FactsComponent } from './site/main/facts/facts.component';
import { FeatureServicesComponent } from './site/main/feature-services/feature-services.component';
import { ActionComponent } from './site/main/action/action.component';
import { InformationComponent } from '../app/site/main/information/information.component';
import { InfoTabComponent } from '../app/site/main/info-tab/info-tab.component';
import { TestimonialComponent } from './site/main/testimonial/testimonial.component';
import { MonoTestimonialComponent } from './site/main/testimonial/mono-testimonial/mono-testimonial.component';
import { HowitworksComponent } from './site/main/howitworks/howitworks.component';


const appRoute: Routes = 
[
  {
    path: '', component: MainComponent, children:
      // CHILD ROUTES
      [
        { path: '', component: HomeComponent },
        { path: 'itr/:id', component: ItrComponent },
        { path: 'gst/:id', component: GstComponent },
        { path: 'compliance', component: ComplianceComponent }
      ]
  },
  {
    path: 'dashboard', component: DashboardComponent, children:
      // CHILD ROUTES
      [
        { path: 'dashboard', component: UserprofileComponent },
        { path: 'profile', component: UserprofileComponent },
        { path: 'invoice', component: UserinvoicesComponent },
        { path: 'subscription', component: UserprofileComponent },
        { path: 'payment', component: UserprofileComponent },
        { path: 'help', component: UserprofileComponent }

      ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    FooterComponent,
    MaincarouselComponent,
    HomeComponent,
    GetstartedFormComponent,
    FaqComponent,
    ServiceComponent,
    ServicesComponent,
    ItrComponent,
    GstComponent,
    ComplianceComponent,
    AccountComponent,
    AboutUsComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    DashboardComponent,
    LeftsectionComponent,
    RightsectionComponent,
    UserprofileComponent,
    UserinvoicesComponent,
    InnerheaderComponent,
    FactsComponent,
    FeatureServicesComponent,
    ActionComponent,
    InformationComponent,
    InfoTabComponent,
    TestimonialComponent,
    MonoTestimonialComponent,
    HowitworksComponent
  ],
  entryComponents: [AccountComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgwWowModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    IgxTabsModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
