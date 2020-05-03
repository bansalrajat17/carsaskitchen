import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IgxTabsModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon/';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FaqComponent } from './site/main/faq/faq.component';
import { FooterComponent } from './site/main/footer/footer.component';
import { GetstartedFormComponent } from './site/main/getstarted-form/getstarted-form.component';
import { HeaderComponent } from './site/main/header/header.component';
import { HomeComponent } from './site/main/home/home.component';
import { ItrComponent } from './site/main/itr/itr.component';
import { MaincarouselComponent } from './site/main/maincarousel/maincarousel.component';
import { NavigationBarComponent } from './site/main/navigation-bar/navigation-bar.component';
import { ServicesComponent } from './site/services/services.component';
import { ComplianceComponent } from './site/main/compliance/compliance.component';
import { GstComponent } from './site/main/gst/gst.component';
import { HomeStatsComponent } from './site/main/home-stats/home-stats.component';
import { AboutUsComponent } from './site/main/about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './shared/auth/account/account.component';
import { TokenInterceptorService } from './site/service/interceptors/TokenInterceptorService';
import { SignupComponent } from './shared/auth/signup/signup.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { MainComponent } from './site/main/main.component';
import { DashboardComponent } from './webapp/dashboard/dashboard.component';
import { LeftsectionComponent } from './webapp/dashboard/leftsection/leftsection.component';
import { RightsectionComponent } from './webapp/dashboard/rightsection/rightsection.component';
import { UserprofileComponent } from './webapp/dashboard/rightsection/userprofile/userprofile.component';
import { UserinvoicesComponent } from './webapp/dashboard/rightsection/userinvoices/userinvoices.component';
import { InnerheaderComponent } from './webapp/dashboard/rightsection/innerheader/innerheader.component';

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
    ServicesComponent,
    ItrComponent,
    GstComponent,
    ComplianceComponent,
    HomeStatsComponent,
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
    InnerheaderComponent
  ],
  entryComponents: [AccountComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
